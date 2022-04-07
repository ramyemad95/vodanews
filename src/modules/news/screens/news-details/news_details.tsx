import React from 'react';
import {Text, View,Image,ScrollView} from '../../../../core/components/index';
import { newsModel } from '../../interfaces/news_data';
import {useTheme} from '@ui-kitten/components';


interface Props {
  newsItem: newsModel;
}

export const NewsDetails = ({route }): JSX.Element => {
  const { newsItem } = route.params;
  const theme = useTheme();

  return (
    <ScrollView  style={{padding:10,backgroundColor:theme['background-basic-color-1'],flex:1 }}>
              <Text style={{fontSize:25,alignItems:'flex-start',color:theme['text-basic-color']} }>{newsItem.title}</Text>
              <Image style={{height:250}}   source={{   uri: newsItem.urlToImage,  }}/>
              <Text style={{fontSize:15,color:theme['text-hint-color']}}>{newsItem.author}</Text>
              <Text style={{fontSize:15,color:theme['text-hint-color'],marginTop:8}}>{newsItem.publishedAt}</Text>
              

              <Text style={{fontSize:17,color:theme['text-basic-color'],marginTop:8}}>{newsItem.description}</Text>



            </ScrollView>
     );
};