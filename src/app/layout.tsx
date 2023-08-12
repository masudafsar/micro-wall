import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import { ThemeProvider } from '@formaloo/providers';
import { Box, Container } from '@mui/material';
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
          <AppBar />

          <Box
            component="main"
            sx={{
              mt: ['56px', '64px'],
            }}
          >
            <Container>{children}</Container>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
