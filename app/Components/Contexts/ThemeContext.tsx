import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from 'react';
import { Appearance, ColorSchemeName } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import themeEventEmitter from '../Events/ThemeEvents'; // Make sure this path is correct

// Theme setting type: can be 'light', 'dark', or 'system'
type ThemeSetting = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: ColorSchemeName;
  themeSetting: ThemeSetting;
}

// Create context with default undefined to force proper use
export const CustomThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeConsumerProps {
  children: (context: ThemeContextType) => ReactNode;
}

export const CustomThemeConsumer: React.FC<ThemeConsumerProps> = ({ children }) => (
  <CustomThemeContext.Consumer>
    {(context) => {
      if (!context) {
        throw new Error('CustomThemeConsumer must be used within a CustomThemeProvider');
      }
      return children(context);
    }}
  </CustomThemeContext.Consumer>
);

interface ThemeProviderProps {
  children: ReactNode;
}

export const CustomThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const storeKey = 'themesetting';

  const [themeSetting, setThemeSetting] = useState<ThemeSetting>('system');
  const [theme, setTheme] = useState<ColorSchemeName>(Appearance.getColorScheme());

  const applyTheme = useCallback((setting: ThemeSetting) => {
    if (setting === 'system') {
      setTheme(Appearance.getColorScheme());
    } else {
      setTheme(setting);
    }
  }, []);

  const initTheme = useCallback(async () => {
    try {
      const storedSetting = await AsyncStorage.getItem(storeKey);
      if (storedSetting === 'light' || storedSetting === 'dark' || storedSetting === 'system') {
        setThemeSetting(storedSetting);
        applyTheme(storedSetting);
      } else {
        await AsyncStorage.setItem(storeKey, 'system');
        setThemeSetting('system');
        applyTheme('system');
      }
    } catch (e) {
      console.error('Failed to initialize theme:', e);
    }
  }, [applyTheme]);

  useEffect(() => {
    initTheme();

    const onThemeChanged = async (newSetting: ThemeSetting) => {
      await AsyncStorage.setItem(storeKey, newSetting);
      setThemeSetting(newSetting);
      applyTheme(newSetting);
    };

    themeEventEmitter.on('themeChanged', onThemeChanged);

    return () => {
      themeEventEmitter.off('themeChanged', onThemeChanged);
    };
  }, [applyTheme, initTheme]);

  useEffect(() => {
    if (themeSetting !== 'system') return;

    const systemListener = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme);
    });

    return () => {
      systemListener.remove();
    };
  }, [themeSetting]);

  const MemoizedValue = useMemo(
    () => ({
      theme,
      themeSetting,
    }),
    [theme, themeSetting]
  );

  return (
    <CustomThemeContext.Provider value={MemoizedValue}>
      {children}
    </CustomThemeContext.Provider>
  );
};
