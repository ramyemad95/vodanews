import React, {useContext} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {useTheme} from '@ui-kitten/components';
import { ModeContext } from '../context/mode_context';
import {styles} from '../styles/root_layout.styles';
import {useSelector} from 'react-redux';
import {RootState} from '@app/store';



type Props = {
  children?: React.ReactNode;
};

export const RootLayout = (props: Props): JSX.Element => {
  const {children} = props;
  const theme = useTheme();
  const mode = useSelector((state: RootState) => state.settings.mode);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={mode === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={theme['background-basic-color-2']}
      />
      <SafeAreaView style={[styles.top, {backgroundColor: theme['background-basic-color-2']}]} />
      <SafeAreaView style={[styles.bottom, {backgroundColor: theme['background-basic-color-1']}]}>
        {children}
      </SafeAreaView>
    </View>
  );
};