import React from 'react';
import { setToken } from '../modules/auth';
import { useDispatch } from 'react-redux';
import Navigation from '../navigation';
import useColorScheme from './useColorScheme';
import { useEffect } from 'react';
import { setAuthorizeToken } from '../lib/api/auth';

type TokenProviderProps = {
  accessToken: null | { token: string; expiresIn: Date };
  refreshToken: null | { token: string; expiresIn: Date };
};

const TokenProvider = ({ accessToken, refreshToken }: TokenProviderProps) => {
  const dispatch = useDispatch();
  const colorScheme = useColorScheme();

  useEffect(() => {
    if (accessToken && refreshToken) {
      setAuthorizeToken(accessToken.token);
      dispatch(setToken({ accessToken, refreshToken }));
    }
  }, []);

  return <Navigation colorScheme={colorScheme} />;
};

export default TokenProvider;
