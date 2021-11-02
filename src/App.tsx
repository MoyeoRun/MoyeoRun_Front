import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { extendTheme, NativeBaseProvider, v3CompatibleTheme } from 'native-base';
import React from 'react';
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
        <NativeBaseProvider theme={extendTheme(v3CompatibleTheme, customTheme)}>
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
