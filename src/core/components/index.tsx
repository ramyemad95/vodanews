import { SafeAreaView} from 'react-native';
import {ApplicationProvider, Text, useTheme,Toggle,ListItem, RadioGroup, Radio} from '@ui-kitten/components';
import {   View,  ActivityIndicator,  FlatList ,RefreshControl,Image,TouchableOpacity,ScrollView} from 'react-native';
import * as eva  from '@eva-design/eva';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';


export {Text, SafeAreaView, ApplicationProvider,
     useTheme, eva,View,  ActivityIndicator, 
      FlatList,RefreshControl,Image,Toggle,ListItem,TouchableOpacity,ScrollView,Provider,PersistGate,Radio,RadioGroup };
export * from './icons';
export * from './navigation';
