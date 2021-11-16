import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UploadProfile from '../../components/profile/UploadProfile';
import { RootState } from '../../modules';
import { getUserData, uploadProfile } from '../../modules/user';

const UploadProfileContainer = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onUploadProfile = async ({ nickName, weight, height }: Partial<User>) => {
    // dispatch(uploadProfile({ nickName, weight, height }));
    navigation.reset({ index: 0, routes: [{ name: 'Welcome' }] });
  };

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  return <UploadProfile user={user} onUploadProfile={onUploadProfile} />;
};

export default UploadProfileContainer;
