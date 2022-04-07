import {useState, useMemo, useEffect, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Mode} from '@core/interfaces';

export const useMode = (): {mode: Mode; setMode: (mode: Mode) => void} => {
  const [mode, setMode] = useState<Mode>('light');
  const storageKey = 'mode';
  const saveMode = useCallback(async (newMode: Mode): Promise<void> => {
    try {
      setMode(newMode);
      await AsyncStorage.setItem(storageKey, newMode);
    } catch (e) {
      // error writing value
    }
  }, []);
  useEffect(() => {
    const loadMode = async (): Promise<void> => {
      try {
        const value = await AsyncStorage.getItem(storageKey);
        if (value) {
          setMode(value as Mode);
        }
      } catch (e) {
        // error reading value
      }
    };
    loadMode();
  }, []);
  const modeState = useMemo(() => ({mode, setMode: saveMode}), [mode, saveMode]);
  return modeState;
};