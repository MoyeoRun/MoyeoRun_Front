import React from 'react';
import { useDispatch } from 'react-redux';
import { Login } from '../components/Login';

const LoginContainer = () => {
  const dispatch = useDispatch();

  const onKakaoOauth = () => {};

  return <Login />;
};

export default LoginContainer;
