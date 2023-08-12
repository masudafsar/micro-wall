import { createTheme } from '@mui/material/styles';
import { robotoFont } from '@formaloo/themes/robotoFont';

export const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: robotoFont.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});
