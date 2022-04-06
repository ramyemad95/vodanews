import {Text, View,} from '../../../core/components/index';
import { newsModel } from '../interfaces/news_data';
import React from 'react';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import {useTheme} from '@ui-kitten/components';


interface Props {
    newsItem: newsModel;
  }
export const NewsItem = (props:Props): JSX.Element => {
  const theme = useTheme();


  return (
    <Card style={{backgroundColor:theme['background-basic-color-2'],borderColor:theme['border-basic-color-4'],borderRadius:3,borderWidth:1}}>
    <CardImage 
      source={{uri: props.newsItem.urlToImage}} 
      title={props.newsItem.title}
      isDark={(theme['text-basic-color']=="#FFFFFF")}
      
    />
    <CardTitle
      subtitle={props.newsItem.author}
      color={theme['text-basic-color']}
      isDark={(theme['text-basic-color']=="#FFFFFF")}


    />
    <CardContent text={props.newsItem.description}
     color={theme['text-basic-color']}
     isDark={(theme['text-basic-color']=="#FFFFFF")}

          />
    {/* <CardAction 
      separator={true} 
      inColumn={false}>
      <CardButton
        onPress={() => {}}
        title="Share"
        color="#FEB557"
      />
      <CardButton
        onPress={() => {}}
        title="Explore"
        color="#FEB557"
      />
    </CardAction> */}

  </Card>
 
  );
};
