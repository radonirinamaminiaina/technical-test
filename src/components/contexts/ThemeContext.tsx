'use client';

import { createContext, useContext, PropsWithChildren, useState } from 'react';

export declare type ThemeValue = 'dark' | 'light';

export interface ThemeContextValue<T extends string> {
  theme: T;
  switchTheme(theme: string):void;
}

interface ThemeProviderProps<T> {
  defaultTheme?: T;
}

export const ThemeContext = createContext<ThemeContextValue<ThemeValue>>({
  theme: 'light',
  switchTheme:() => {}
});

export const ThemeProvider = ({ children, defaultTheme }: PropsWithChildren<ThemeProviderProps<ThemeValue>>) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeValue>('light')

  const handleSwitchTheme = (theme: ThemeValue) => {
    setCurrentTheme(theme)
  }

  return (
    <ThemeContext.Provider
      value={{
        // @todo: handle this with a state, that can toggle between dark and light
        theme: currentTheme,
        switchTheme: handleSwitchTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
