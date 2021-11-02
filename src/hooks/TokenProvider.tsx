import React from 'react';
import { setToken } from '../modules/auth';
import { setAuthorizeToken } from '../lib/api/auth';
import { useDispatch } from 'react-redux';
import Navigation from '../navigation';
import useColorScheme from './useColorScheme';
import { useEffect } from 'react';

type TokenProviderProps = {
  accessToken: null | string;
  refreshToken: null | string;
};

const TokenProvider = ({ accessToken, refreshToken }: TokenProviderProps) => {
  const dispatch = useDispatch();
  const colorScheme = useColorScheme();

  useEffect(() => {
    if (accessToken && refreshToken) {
      dispatch(setToken({ accessToken, refreshToken }));
    }
  }, []);

  return <Navigation colorScheme={colorScheme} />;
};

export default TokenProvider;
