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
import useNotification from './src/lib/hooks/useNotification';
import TokenProvider from './src/TokenProvider';

const App = () => {
  const { isLoadingComplete, accessToken, refreshToken } = useCachedResources();
  const navigationRef = useNavigationContainerRef();
  store.dispatch(setToken({ accessToken, refreshToken }));
  useNotification();

  return (
    <Provider store={store}>
      <TokenProvider navigationRef={navigationRef}>
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
      </TokenProvider>
    </Provider>
  );
};

export default App;
