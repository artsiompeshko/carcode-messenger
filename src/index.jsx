import React, { useEffect, useState } from 'react';

import { serviceWorkerRegistration } from 'core/service-worker';

import { Router } from 'core/router';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/purple';
import indigo from '@material-ui/core/colors/indigo';

import { SwRegistrationContext } from './core/contexts';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f47826',
    },
    secondary: {
      main: '#333',
    },
  },
});

export const App = () => {
  const [registration, setRegistration] = useState(null);

  useEffect(() => {
    serviceWorkerRegistration.register({
      onRegistered: swRegistration => {
        setRegistration(swRegistration);
      },
    });
  }, []); // run only once

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <SwRegistrationContext.Provider value={registration}>
          <Router />
        </SwRegistrationContext.Provider>
      </ThemeProvider>
    </React.StrictMode>
  );
};
