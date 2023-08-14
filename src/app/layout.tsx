import { Box, Container } from '@mui/material';
import { type Metadata } from 'next';
import { type PropsWithChildren } from 'react';
import { AppBar } from '@formaloo/components';
import { AppProvider, ThemeProvider } from '@formaloo/providers';
import { robotoFont } from '@formaloo/themes/robotoFont';

export const metadata: Metadata = {
  title: 'MicroWall',
  description: 'MicroWall powered by Formaloo',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <ThemeProvider>
        <AppProvider>
          <Box component="body" className={robotoFont.className} sx={{ backgroundColor: 'grey.100' }}>
            <AppBar />

            <Container component="main" sx={{ mt: ['56px', '64px'], py: 3 }}>
              {children}
            </Container>
          </Box>
        </AppProvider>
      </ThemeProvider>
    </html>
  );
}
