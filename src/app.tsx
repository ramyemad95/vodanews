
import React,{useEffect,useState} from 'react';
import {useSelector} from 'react-redux';
import {Navigation,ApplicationProvider,PersistGate,Provider, eva} from './core/components/index';
import {NavItem} from './core/interfaces/index';
import {NewsStack} from'./modules/news/screens/news_nav'
import {SettingsScreen} from '@settings/screens/settings-home/settings_home';
import { RootLayout } from './core/components/root_layout';
import * as customTheme from './assets/jsons/custom-theme.json';
import { initializeI18n } from '../i18n';
import {useTranslation} from 'react-i18next';
import {store, persistor, RootState} from '@app/store';
import { Text } from 'react-native-svg';



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


const BaseApp = (): JSX.Element => {
  const mode = useSelector((state: RootState) => state.settings.mode);
  const lang = useSelector((state: RootState) => state.settings.lang);
  const theme = mode === 'light' ? eva.light : eva.dark;

  const {t, i18n} = useTranslation('strings');

  useEffect(() => {
    if (lang !== i18n.language) {
      i18n.changeLanguage(lang);
    }
    console.log(mode)
  }, [i18n, lang]);

  const navItems: NavItem[] = [
    {
      name: 'News',
      title: t('news'),
      component: NewsStack,
      icon: 'newspaper-variant-multiple-outline',
      iconFocused: 'newspaper-variant-multiple',
    },
    {
      name: 'Settings',
      title: t('settings'),
      component: SettingsScreen,
      icon: 'cog-outline',
      iconFocused: 'cog',
    },
  ];
  return (
    <ApplicationProvider mapping={eva.mapping} theme={{...theme, ...customTheme}}>
      <RootLayout>
        <Navigation navItems={navItems} />
      </RootLayout>
    </ApplicationProvider>
  );
};

export const App = (): JSX.Element => {
  const [isBootstrapping, setIsBootstrapping] = useState(true);
  useEffect(() => {
    (async () => {
      await initializeI18n();
      setIsBootstrapping(false);
    })();
  }, []);
  if (isBootstrapping) {
    return <Text />;
  }
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Text />}>
        <BaseApp />
      </PersistGate>
    </Provider>
  );
};
