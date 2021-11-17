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

Sentry.init({
  dsn: config.sentry_dsn,
  enableInExpoDevelopment: true,
  debug: __DEV__ ? false : true,
});

const App = () => {
  const { isLoadingComplete, accessToken, refreshToken } = useCachedResources();
  const navigationRef = useNavigationContainerRef();
  store.dispatch(setToken({ accessToken, refreshToken }));

  return (
    <Provider store={store}>
      <Notification>
        <TokenManager navigationRef={navigationRef}>
          <SafeAreaProvider>
            <NativeBaseProvider theme={customTheme}>
              {!isLoadingComplete ? (
                <Onboarding />
              ) : (
                <SafeAreaView mode="padding" style={{ flex: 1, backgroundColor: 'white' }}>
                  <Navigation navigationRef={navigationRef} />
                </SafeAreaView>
              )}
              <StatusBar style="dark" />
            </NativeBaseProvider>
          </SafeAreaProvider>
        </TokenManager>
      </Notification>
    </Provider>
  );
};

export default App;
