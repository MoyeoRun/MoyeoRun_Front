import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import customTheme from './hooks/customTheme';
import Onboarding from './components/Onboarding';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
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
            <SafeAreaView mode="padding" style={{ flex: 1, backgroundColor: 'white' }}>
              <TokenProvider accessToken={accessToken} refreshToken={refreshToken} />
            </SafeAreaView>
          )}
          <StatusBar style="dark" />
        </NativeBaseProvider>
      </SafeAreaProvider>
    </Provider>
  );
};

export default registerRootComponent(App);
