'use client';
import createEmotionCache from '@/utils/createEmotionCache';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Inter } from 'next/font/google';
import { darkTheme } from './assets/theme/themes';
import './global.css';

const inter = Inter({ subsets: ['latin'] });
const clientSideEmotionCache = createEmotionCache();

// Create a client
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={darkTheme}>
            <CacheProvider value={clientSideEmotionCache}>
              <CssBaseline />
              {children}
            </CacheProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
