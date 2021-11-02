import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from '../components/Login';
import { setAuthorizeToken } from '../lib/api/auth';
import { RootState } from '../modules';
import { kakaoOauth } from '../modules/auth';

const LoginContainer = () => {
  const { accessToken } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onKakaoOauth = (accessToken: string) => {
    dispatch(kakaoOauth(accessToken));
  };

  useEffect(() => {
    if (accessToken) {
      setAuthorizeToken(accessToken);
      navigation.reset({ index: 0, routes: [{ name: 'Root' }] });
    }
  }, [accessToken]);

  return <Login onKakaoOauth={onKakaoOauth} />;
};

export default LoginContainer;
