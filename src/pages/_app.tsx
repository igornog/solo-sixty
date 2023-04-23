import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import LoginLayout from '../components/Layout/Login';
import '../assets/css/global.css';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@material-ui/core';

export const solo60Theme = createTheme({
  palette: {
    primary: {
      light: '#60A498',
      main: '#60A498',
      dark: '#60A498',
      contrastText: '#FFFFFF',
    },
  },
});
export default function App({ Component, pageProps }: AppProps) {
  let logged = true;

  return (
    <>
      <ThemeProvider theme={solo60Theme}>
        {!logged ? (
          <LoginLayout>
            <Component {...pageProps} />
          </LoginLayout>
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </ThemeProvider>
    </>
  );
}
