import type { AppProps } from 'next/app';
import { solo60Theme } from '../styles/theme';
import { ThemeProvider } from '@mui/material';
import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={solo60Theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
