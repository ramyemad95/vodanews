
import React,{useEffect,} from 'react';
import { Linking } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {NavItem} from '../interfaces/index';
import {Icon,Text} from '../components/';
import {useTheme} from '@ui-kitten/components';


interface Props {
  navItems: NavItem[];
}

const Tab = createBottomTabNavigator();

export const Navigation = (props: Props): JSX.Element => {
  const {navItems} = props;
  const theme = useTheme();
  
  const config = {
    screens: {
      Settings: 'settings',
      News: 'news',
    }
  };
  
  const linking = {
    prefixes: ['vodanews://','https://vodanews.com'],
    config,
  };

  useEffect(() => {
    
    Linking.getInitialURL().then((v)=>{
      console.log("linking",v)
    })
   
  }, [])
  
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Tab.Navigator
         tabBarOptions={{
          activeTintColor: theme['color-primary-default'],
          activeBackgroundColor: theme['background-basic-color-1'],
          inactiveBackgroundColor: theme['background-basic-color-1'],
          style: {
            borderTopColor: theme['background-basic-color-1'],
          },
        }}
        initialRouteName={navItems[0].name}>
        {navItems.map((navItem) => (
          <Tab.Screen
            key={navItem.name}
            name={navItem.name}
            component={navItem.component}
            options={{
              title: navItem.title,
              headerTintColor: theme['text-basic-color'],

              headerStyle: {
                backgroundColor: theme['background-basic-color-1'],
              },
              tabBarIcon: (iconProps) => {
                const {focused, color, size} = iconProps;
                return <Icon name={focused ? navItem.iconFocused : navItem.icon} size={size} color={color} />;
              },
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};