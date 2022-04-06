import React from 'react';
import {View, ActivityIndicator,FlatList,RefreshControl,TouchableOpacity} from '../../../../core/components/index';
import { useGetAllNews } from '../../hooks/get_news';
import {NewsItem} from '../../components/news_item'
import {useTheme} from '@ui-kitten/components';
import SearchBar from "react-native-dynamic-search-bar";
import { newsModel } from '../../interfaces/news_data';





export const NewsScreen = ({navigation}): JSX.Element => {

  const { data, loading,error,getData} =  useGetAllNews()

  const [refreshing, setRefreshing] = React.useState(false);

  const [filteredData, setFilteredData] = React.useState<newsModel[]>();

  const theme = useTheme();
  

  const onRefresh = React.useCallback(() => {
    getData()
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const wait = (timeout:number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  React.useEffect(() => { 
   setFilteredData(data)
    }, [data]);



  const  onSearchChange= (searchText:string)=>{
      let newFilteredData =data.filter(data_=>data_.title.includes(searchText))
      setFilteredData(newFilteredData) 
  }
  console.log("color"+theme['text-basic-color'])

  function onItemPressed(item:newsModel){
    console.log("click")
    navigation.navigate('NewsDetails',{
      newsItem:item
    })
  }

  return (
    <View style={{ flex: 1, paddingTop:16,paddingHorizontal:6,backgroundColor:theme['background-basic-color-1'] }}>
      <SearchBar style={{padding:0 ,backgroundColor:theme['background-basic-color-2']}}
          placeholder="Search news"
          onChangeText={(text) =>onSearchChange(text) }
          darkMode={(theme['text-basic-color']=="#FFFFFF")}
          onClearPress={() => setFilteredData([])}
                    />
      {loading ? <ActivityIndicator/> : (
        <FlatList style={{flex:1}}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />}
          data={filteredData}
          renderItem={({item }) => (
            <TouchableOpacity onPress={ () => onItemPressed(item)}>
                <NewsItem newsItem={item}/>
            </TouchableOpacity>
          )}
        />
      )}
    </View>

  );
};