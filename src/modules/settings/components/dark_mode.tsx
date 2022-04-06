import React, {useContext} from 'react';
import {ListItem, Toggle, Icon} from '@app/core/components';
import { ModeContext } from '@app/core/context/mode_context';

export const DarkMode = (): JSX.Element => {
  const {mode, setMode} = useContext(ModeContext);
  const onChange = (): void => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };
  return (
    <ListItem
      title='Dark mode'
      description='Toggle between Dark/Light mode'
      accessoryLeft={() => <Icon name='theme-light-dark' />}
      accessoryRight={() => <Toggle checked={mode === 'dark'} onChange={onChange} />}
    />
  );
};