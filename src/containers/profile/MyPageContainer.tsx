import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import MyPage from '../../components/profile/MyPage';
import { RootState } from '../../modules';
import { uploadImage } from '../../modules/image';
import { getUserData } from '../../modules/user';

const MyPageContainer = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  if (!user) return null;

  return (
    <SafeAreaView mode="padding" style={{ flex: 1, backgroundColor: 'white' }}>
      <MyPage user={user} />
    </SafeAreaView>
  );
};

export default MyPageContainer;
