import { useNavigation } from '@react-navigation/core';
import { setItemAsync } from 'expo-secure-store';
import React, { useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../../components/auth/Login';
import { setAuthorizeToken } from '../../lib/api/auth';
import { RootState } from '../../modules';
import { kakaoOauth, refreshAccessToken, setToken } from '../../modules/auth';
import { getUserData } from '../../modules/user';

const LoginContainer = () => {
  const { accessToken, refreshToken } = useSelector((state: RootState) => state.auth);
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const refreshRef = useRef<any>();

  const onKakaoOauth = (accessToken: string) => {
    dispatch(kakaoOauth(accessToken));
  };

  const setAuthentication = async () => {
    if (accessToken && refreshToken) {
      dispatch(setToken({ accessToken, refreshToken }));
      setAuthorizeToken(accessToken.token);
      setItemAsync('accessToken', JSON.stringify(accessToken));
      setItemAsync('refreshToken', JSON.stringify(refreshToken));

      await dispatch(getUserData());
      clearInterval(refreshRef.current);
      const refreshInterval = setInterval(() => {
        dispatch(refreshAccessToken(refreshToken.token));
      }, 20 * 60 * 1000);
      refreshRef.current = refreshInterval;
    }
  };

  useEffect(() => {
    setAuthentication();
  }, [accessToken, refreshToken]);

  useEffect(() => {
    if (user) {
      if (user.weight) navigation.reset({ index: 0, routes: [{ name: 'BottomTab' }] });
      else navigation.reset({ index: 0, routes: [{ name: 'UploadProfile' }] });
    }
  }, [user]);

  return (
    <SafeAreaView mode="padding" style={{ flex: 1, backgroundColor: 'white' }}>
      <Login onKakaoOauth={onKakaoOauth} />
    </SafeAreaView>
  );
};

export default LoginContainer;
