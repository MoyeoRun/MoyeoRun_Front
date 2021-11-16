import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import React, { useEffect } from 'react';
import customTheme from './src/hooks/customTheme';
import Onboarding from './src/components/Onboarding';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import useCachedResources from './src/hooks/useCachedResources';
import { Provider } from 'react-redux';
import store from './src/store';
import TokenProvider from './src/hooks/TokenProvider';
import Notification from './src/Notification';
import * as Sentry from 'sentry-expo';
import config from './src/config';

Sentry.init({
  dsn: config.sentry_dsn,
  enableInExpoDevelopment: true,
  debug: __DEV__ ? false : true,
});

const App = () => {
  const { isLoadingComplete, accessToken, refreshToken } = useCachedResources();

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NativeBaseProvider theme={customTheme}>
          {!isLoadingComplete ? (
            <Onboarding />
          ) : (
            <SafeAreaView mode="padding" style={{ flex: 1, backgroundColor: 'white' }}>
              <Notification />
              <TokenProvider accessToken={accessToken} refreshToken={refreshToken} />
            </SafeAreaView>
          )}
          <StatusBar style="dark" />
        </NativeBaseProvider>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
