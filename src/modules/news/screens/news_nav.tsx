import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import{NewsScreen} from './news-home/news_home'
import{NewsDetails} from './news-details/news_details'


const Stack = createStackNavigator();

export function NewsStack() {
  return (
    <Stack.Navigator 
    screenOptions={{
      headerShown: false
    }}initialRouteName="news">
      <Stack.Screen name="news" component={NewsScreen} />
      <Stack.Screen name="NewsDetails" component={NewsDetails} />
    </Stack.Navigator>
  );
}