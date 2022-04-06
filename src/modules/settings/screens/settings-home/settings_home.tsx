import {View} from '../../../../core/components/index';
import React from 'react';
import { DarkMode } from '../../components/dark_mode';
import {useTheme} from '@ui-kitten/components';



export const SettingsScreen = (): JSX.Element => {
  const theme = useTheme();


  return (
    <View style={{ flex: 1, paddingTop:16,paddingHorizontal:16,backgroundColor:theme['background-basic-color-1'] }}>
      <DarkMode/>
    </View>
  );
};
