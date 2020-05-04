import React, { useEffect, useState, useReducer } from 'react';

import { serviceWorkerRegistration } from 'core/service-worker';

import { Router } from 'core/router';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { SwRegistrationContext } from 'core/contexts';
import { rootReducer } from 'core/reducers';

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

// eslint-disable-next-line no-underscore-dangle
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const App = () => {
  const [registration, setRegistration] = useState(null);
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  useEffect(() => {
    serviceWorkerRegistration.register({
      onRegistered: swRegistration => {
        setRegistration(swRegistration);
      },
    });

    const onBeforeInstallPrompt = e => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      window.deferredPrompt = e;

      forceUpdate();
    };

    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt);
  }, []); // run only once

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <SwRegistrationContext.Provider value={registration}>
          <Provider store={store}>
            <Router />
          </Provider>
        </SwRegistrationContext.Provider>
      </ThemeProvider>
    </React.StrictMode>
  );
};
