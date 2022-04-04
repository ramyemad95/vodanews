
import React from 'react';
import {Navigation,ApplicationProvider,eva} from './core/components/index';
import {NavItem} from './core/interfaces/index';
import {WeatherScreen} from '@news/screens/news-home/news_home'
import {SettingsScreen} from '@settings/screens/settings-home/settings_home';
import * as customTheme from './assets/jsons/custom-theme.json';


const navItems: NavItem[] = [
  {
    name: 'weather',
    title: 'Weather',
    component: WeatherScreen,
    icon: 'newspaper-variant-multiple-outline',
    iconFocused: 'newspaper-variant-multiple',
  },
  {
    name: 'settings',
    title: 'Settings',
    component: SettingsScreen,
    icon: 'cog-outline',
    iconFocused: 'cog',
  },
];

export const App = (): JSX.Element => {
  return(<ApplicationProvider mapping={eva.mapping} theme={{...eva.light,...customTheme}}>
              <Navigation navItems={navItems} />
     </ApplicationProvider>
     )
};
