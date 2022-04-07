import React, {useContext} from 'react';
import {ListItem, Toggle, Icon} from '@app/core/components';
import {useTranslation} from 'react-i18next';
import {RootState, Dispatch} from '@app/store';
import {useSelector, useDispatch} from 'react-redux';



export const DarkMode = (): JSX.Element => {
  const {t} = useTranslation('strings');

  const mode = useSelector((state: RootState) => state.settings.mode);
  const {
    settings: {setMode},
  } = useDispatch<Dispatch>();  const onChange = (): void => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };
  return (
    <ListItem
      title={t('darkModeTitle').toString()}
      description={t('darkModeDesc').toString()}
      accessoryLeft={() => <Icon name='theme-light-dark' />}
      accessoryRight={() => <Toggle checked={mode === 'dark'} onChange={onChange} />}
    />
  );
};