import React, { createElement } from 'react';
import * as SecureStore from 'expo-secure-store';
import store from './store';
import { getAccessToken, initToken } from './modules/auth';
import { setAuthorizeToken } from './lib/api/auth';
import { NavigationContainerRefWithCurrent } from '@react-navigation/core';

type TokenProviderProps = {
  children: React.ReactNode;
  navigationRef: NavigationContainerRefWithCurrent<ReactNavigation.RootParamList>;
};

const TokenProvider = ({ children, navigationRef }: TokenProviderProps): JSX.Element => {
  const { accessToken, refreshToken } = store.getState().auth;

  const manageToken = async () => {
    if (refreshToken) {
      if (accessToken) {
        if (
          new Date(accessToken.expiresIn) < new Date() &&
          new Date(refreshToken.expiresIn) > new Date()
        ) {
          await store.dispatch(getAccessToken(refreshToken.token));
        }
        if (new Date(refreshToken.expiresIn) < new Date()) {
          store.dispatch(initToken());
          return;
        }
        console.log('@@@@@@ token exists, set Authorization');
        console.log(accessToken, refreshToken);
        setAuthorizeToken(accessToken.token);
        SecureStore.setItemAsync('accessToken', JSON.stringify(accessToken));
        SecureStore.setItemAsync('refreshToken', JSON.stringify(refreshToken));
      } else {
        try {
          console.log('@@@@@@ Access token remove perceive, try refresh');
          await store.dispatch(getAccessToken(refreshToken.token));
        } catch {
          console.log('@@@@@@ Access token refresh failed');
          navigationRef.reset({ index: 0, routes: [{ name: 'Login' }] });
        }
      }
    } else {
      console.log('@@@@@@ refresh token not found');
      navigationRef.reset({ index: 0, routes: [{ name: 'Login' }] });
    }
  };

  React.useEffect(() => {
    manageToken();
  }, [accessToken, refreshToken]);
  return <>{children}</>;
};

export default TokenProvider;
