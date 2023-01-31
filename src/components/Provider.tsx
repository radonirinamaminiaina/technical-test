'use client';

import { PropsWithChildren } from 'react';
import { ThemeProvider, ThemeValue } from './contexts/ThemeContext';
import { WalletProvider } from './Connect';
import { Provider as ReduxProvider } from "react-redux";
import store from '@/app/store';

interface Props {
  theme?: ThemeValue;
}

export default function Provider({ children, theme }: PropsWithChildren<Props>) {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider defaultTheme={theme}>
        <WalletProvider>{children}</WalletProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
}
