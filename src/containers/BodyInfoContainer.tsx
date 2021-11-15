import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BodyInfo from '../components/BodyInfo/BodyInfo';
import { RootState } from '../modules';
import { uploadBodyInfo } from '../modules/user';

const BodyInfoContainer = () => {
  const { accessToken, refreshToken } = useSelector((state: RootState) => state.auth);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onUploadBodyInfo = async (weight: number, height: number) => {
    await dispatch(uploadBodyInfo({ weight, height }));
    navigation.reset({ index: 0, routes: [{ name: 'BottomTab' }] });
  };

  return <BodyInfo onUploadBodyInfo={onUploadBodyInfo} />;
};

export default BodyInfoContainer;
