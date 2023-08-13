import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import { AppProvider, ThemeProvider } from '@formaloo/providers';
import { Container } from '@mui/material';
import { AppBar } from '@formaloo/components';
import { robotoFont } from '@formaloo/themes/robotoFont';

export const metadata: Metadata = {
  title: 'MicroWall',
  description: 'MicroWall powered by Formaloo',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={robotoFont.className}>
        <ThemeProvider>
          <AppProvider>
            <AppBar />

            <Container component="main" sx={{ mt: ['56px', '64px'], py: 3 }}>
              {children}
            </Container>
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
