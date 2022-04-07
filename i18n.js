import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {config} from '@core/config';
import stringsAR from'./src/assets/jsons/locals/ar/strings.json'
import stringsEN from'./src/assets/jsons/locals/en/strings.json'



export const initializeI18n = async (): Promise<void> => {
  await i18next.use(initReactI18next).init({
    lng: config.defaultLang,
    debug: __DEV__,
    resources: {
      en: {
       strings:stringsEN
      },
      ar: {
        strings:stringsAR
      },
    },
  });
};