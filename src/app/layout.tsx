import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const robotoStyles = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '700'] });

export const metadata: Metadata = {
  title: 'MicroWall',
  description: 'MicroWall powered by Formaloo',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={robotoStyles.className}>{children}</body>
    </html>
  );
}
