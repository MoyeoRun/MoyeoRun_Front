import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyPage from '../../components/profile/MyPage';
import { RootState } from '../../modules';
import { getUserData } from '../../modules/user';

const MyPageContainer = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  if (!user) return null;

  return <MyPage user={user} />;
};

export default MyPageContainer;
