import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import { ThemeProvider } from '@formaloo/providers';
import { Container, Fab } from '@mui/material';
import { AppBar } from '@formaloo/components';
import { robotoFont } from '@formaloo/themes/robotoFont';
import { AppProvider } from '@formaloo/providers/appProvider';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

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

              <Fab color="primary" aria-label="add" sx={{ position: 'fixed', bottom: '1rem', right: '1rem' }}>
                <AddTwoToneIcon />
              </Fab>
            </Container>
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
