import { blue, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { Inter, Poppins, Roboto } from 'next/font/google';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const inter = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  style: ['normal'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      // main: '#007a7e',
      // main: '#2AAA8A',
      main: '#097969',
    },
    secondary: {
      main: blue.A700,
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
});
export default theme;
