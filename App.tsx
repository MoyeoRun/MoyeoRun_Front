import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import customTheme from './src/lib/hooks/customTheme';
import Onboarding from './src/components/Onboarding';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import useCachedResources from './src/lib/hooks/useCachedResources';
import { Provider } from 'react-redux';
import store from './src/store';
import { setToken } from './src/modules/auth';
import Navigation from './src/navigation';
import { useNavigationContainerRef } from '@react-navigation/core';
import TokenManager from './src/TokenManager';
import * as Sentry from 'sentry-expo';
import config from './src/config';
import Notification from './src/Notification';
import useSocket from './src/lib/hooks/useSocket';

Sentry.init({
  dsn: config.sentry_dsn,
  enableInExpoDevelopment: true,
  debug: __DEV__ ? false : true,
});

const App = () => {
  const { isLoadingComplete, accessToken, refreshToken } = useCachedResources();
  const navigationRef = useNavigationContainerRef();
  store.dispatch(setToken({ accessToken, refreshToken }));
  useSocket(config.socketEndpoint);

  return (
    <Provider store={store}>
      <TokenManager navigationRef={navigationRef}>
        <Notification>
          <SafeAreaProvider>
            <NativeBaseProvider theme={customTheme}>
              {!isLoadingComplete ? <Onboarding /> : <Navigation navigationRef={navigationRef} />}
              <StatusBar style="dark" />
            </NativeBaseProvider>
          </SafeAreaProvider>
        </Notification>
      </TokenManager>
    </Provider>
  );
};

export default App;
