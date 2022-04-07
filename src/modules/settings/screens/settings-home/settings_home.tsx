import {View} from '../../../../core/components/index';
import React,{useEffect} from 'react';
import { DarkMode } from '../../components/dark_mode';
import { Language } from '../../components/language/language';

import {useTheme} from '@ui-kitten/components';

interface Props{
  testDeepLink?:string
}

export const SettingsScreen = ({route}): JSX.Element => {

  const theme = useTheme();
  useEffect(() => {
    const  {testDeepLink} = route?.params||""

    console.log("test",testDeepLink)
  }, [])
  


  return (
    <View style={{ flex: 1, paddingTop:16,paddingHorizontal:16,backgroundColor:theme['background-basic-color-1'] }}>
      <DarkMode/>
      <Language/>
    </View>
  );
};
