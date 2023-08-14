'use client';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { type PropsWithChildren } from 'react';
import { NextAppDirEmotionCacheProvider } from '@formaloo/providers';
import { defaultTheme } from '@formaloo/themes';

export function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <MuiThemeProvider theme={defaultTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
