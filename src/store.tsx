import createRematchPersist, {getPersistor} from '@rematch/persist';
import {init, RematchRootState} from '@rematch/core';
import storage from '@react-native-async-storage/async-storage';
import {settings} from '@core/models';

const persistPlugin = createRematchPersist({
  whitelist: ['settings'],
  throttle: 1000,
  version: 1,
  key:"root",
  storage
});

const models = {settings};

export const store = init({
  plugins: [persistPlugin],
  models,
});

export const persistor = getPersistor();
export type Store = typeof store;
export type Dispatch = typeof store.dispatch;
export type RootState = RematchRootState<typeof models>;