import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UploadProfile from '../../components/profile/UploadProfile';
import { isNickname } from '../../lib/util/validate';
import { RootState } from '../../modules';
import { uploadImage } from '../../modules/image';
import { checkNickName, getUserData, setState, uploadProfile } from '../../modules/user';

const UploadProfileContainer = () => {
  const { user, isUniqueNickName } = useSelector((state: RootState) => state.user);
  const { accessToken, notificationToken } = useSelector((state: RootState) => state.auth);
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [nickName, setNickName] = useState<string>('');
  const [step, setStep] = useState<'uploadProfile' | 'uploadBodyInfo' | 'uploadNickName'>(
    'uploadBodyInfo',
  );
  const [image, setImage] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onUploadProfile = async () => {
    if (!nickName || !weight || !height) {
      alert('정보를 전부 입력해주세요');
      return;
    }
    if (!user) {
      alert('세션이 만료되었습니다');
      navigation.navigate('Login');
      return;
    }
    dispatch(uploadProfile({ ...user, nickName, weight, height, image, token: notificationToken }));
    navigation.reset({ index: 0, routes: [{ name: 'Welcome' }] });
  };

  const onChangeNickName = async (nickName: string) => {
    await setNickName(nickName);
  };

  const onNickNameCheck = async (nickName: string) => {
    dispatch(setState('isUniqueNickName', false));
    await dispatch(checkNickName(nickName));
  };

  const onUploadProfileImage = (location: string) => {
    dispatch(setImage(location));
  };

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  useEffect(() => {
    if (!accessToken) {
      alert('세션이 만료되었습니다.');
      navigation.navigate('Login');
    }
  }, [accessToken]);

  return (
    <UploadProfile
      user={user}
      accessToken={accessToken}
      isUniqueNickName={isUniqueNickName}
      step={step}
      weight={weight}
      height={height}
      nickName={nickName}
      setWeight={setWeight}
      setHeight={setHeight}
      setStep={setStep}
      onChangeNickName={onChangeNickName}
      onNickNameCheck={onNickNameCheck}
      onUploadProfile={onUploadProfile}
      onUploadProfileImage={onUploadProfileImage}
    />
  );
};

export default UploadProfileContainer;
