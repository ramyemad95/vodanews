
import React from 'react';
import {Navigation,ApplicationProvider,eva,View} from './core/components/index';
import {NavItem} from './core/interfaces/index';
import {NewsStack} from'./modules/news/screens/news_nav'
import {SettingsScreen} from '@settings/screens/settings-home/settings_home';
import { useMode } from './core/hooks/use_mode';
import {ModeContext} from './core/context/mode_context';
import {useTheme} from '@ui-kitten/components';
import { RootLayout } from './core/components/root_layout';


import * as customTheme from './assets/jsons/custom-theme.json';


const navItems: NavItem[] = [
  {
    name: 'News',
    title: 'News',
    component: NewsStack,
    icon: 'newspaper-variant-multiple-outline',
    iconFocused: 'newspaper-variant-multiple',
  },
  {
    name: 'Settings',
    title: 'Settings',
    component: SettingsScreen,
    icon: 'cog-outline',
    iconFocused: 'cog',
  },
];

export const App = (): JSX.Element => {
  const mode = useMode();
  const theme = mode.mode === 'light' ? eva.light : eva.dark;
  const theme_ = useTheme();

  
  
  return(<ModeContext.Provider value={mode}>
        <ApplicationProvider mapping={eva.mapping} theme={{...theme,...customTheme}} >
          <RootLayout>
            <Navigation navItems={navItems} />
          </RootLayout>
        </ApplicationProvider>
     </ModeContext.Provider>

     )
};
