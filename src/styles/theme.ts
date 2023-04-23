import { createTheme } from '@mui/material';
import { blue, green, grey3, red } from '../utils/colors';

export let solo60Theme = createTheme({
  palette: {
    primary: {
      main: blue,
    },
    secondary: {
      main: green,
    },
    success: {
      main: green,
    },
    error: {
      main: red,
    },
    action: {
      disabled: grey3,
    },
  },
  typography: {
    h1: {
      fontSize: '50px',
      fontFamily: 'Bebas Neue',
      textTransform: 'none',
      lineHeight: '60.51px',
      letterSpacing: '.5px',
    },
    h2: {
      fontSize: '40px',
      fontFamily: 'Bebas Neue',
      fontWeight: '700',
      textTransform: 'none',
      lineHeight: '48.41px',
      letterSpacing: '.5px',
    },
    h3: {
      fontSize: '30px',
      fontWeight: '700',
      fontFamily: 'Bebas Neue',
      textTransform: 'none',
      lineHeight: '36.31px',
      letterSpacing: '.5px',
    },
    h4: {
      fontSize: '25px',
      fontWeight: '600',
      textTransform: 'none',
      lineHeight: '30.26px',
      letterSpacing: '.5px',
    },
    h5: {
      fontSize: '20px',
      fontWeight: '600',
      textTransform: 'none',
      lineHeight: '24.2px',
      letterSpacing: '.5px',
    },
    body1: {
      fontFamily: 'Uncut Sans',
      fontSize: '16px',
      textTransform: 'none',
    },
    body2: {
      fontFamily: 'Uncut Sans',
      fontSize: '14px',
      textTransform: 'none',
    },
    button: {
      fontFamily: 'Uncut Sans',
      fontSize: '16px',
      lineHeight: '16px',
      textTransform: 'none',
      fontWeight: '700',
    },
    subtitle1: {
      fontSize: '18px',
      fontFamily: 'Bebas Neue',
      textTransform: 'none',
      lineHeight: '28.8px',
    },
    subtitle2: {
      fontSize: '18px',
      textTransform: 'none',
      lineHeight: '28.8px',
    },
    caption: {
      fontSize: '12px',
      fontFamily: 'Bebas Neue',
      textTransform: 'none',
    },
  },
});
export const boxShadow = 'rgb(0 0 0 / 10%) 0px 15px 50px 0px';
export default solo60Theme;
