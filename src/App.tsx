import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import { extendTheme, NativeBaseProvider, v3CompatibleTheme } from 'native-base';
import React, { useEffect, useState } from 'react';
// import { Intro, Login } from './components/Login';
import * as Font from 'expo-font';
=======
import { NativeBaseProvider } from 'native-base';
import React from 'react';
>>>>>>> develop
import customTheme from './hooks/customTheme';
import Onboarding from './components/Onboarding';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import { Provider } from 'react-redux';
import store from './store';
import TokenProvider from './hooks/TokenProvider';

const App = () => {
  const { isLoadingComplete, accessToken, refreshToken } = useCachedResources();

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NativeBaseProvider theme={customTheme}>
          {!isLoadingComplete ? (
            <Onboarding />
          ) : (
            <TokenProvider accessToken={accessToken} refreshToken={refreshToken} />
          )}
          <StatusBar />
        </NativeBaseProvider>
      </SafeAreaProvider>
    </Provider>
  );
};

export default registerRootComponent(App);
