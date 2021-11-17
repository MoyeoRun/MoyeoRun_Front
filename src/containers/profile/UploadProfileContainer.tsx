import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UploadProfile from '../../components/profile/UploadProfile';
import { RootState } from '../../modules';
import { checkNickName, getUserData, setState, uploadProfile } from '../../modules/user';
import * as ImagePicker from 'expo-image-picker';
import { uploadImage } from '../../lib/api/image';
import { UIImagePickerControllerQualityType } from 'expo-image-picker/build/ImagePicker.types';
import * as FileSystem from 'expo-file-system';
import * as ImageManipulator from 'expo-image-manipulator';
import { SaveFormat } from 'expo-image-manipulator';
import { Box, Image } from 'native-base';
import { Platform } from 'react-native';

const UploadProfileContainer = () => {
  const { user, isUniqueNickName } = useSelector((state: RootState) => state.user);
  const { accessToken } = useSelector((state: RootState) => state.auth);
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
    await dispatch(uploadProfile({ ...user, nickName, weight, height, image }));
    dispatch(getUserData());
    navigation.reset({ index: 0, routes: [{ name: 'Welcome' }] });
  };

  const onChangeNickName = async (nickName: string) => {
    await setNickName(nickName);
  };

  const onNickNameCheck = async (nickName: string) => {
    dispatch(setState('isUniqueNickName', false));
    await dispatch(checkNickName(nickName));
  };

  const onGetProfileImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      videoQuality: UIImagePickerControllerQualityType.Medium,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.3,
    });

    if (result.cancelled) return;

    const fileInfo = await FileSystem.getInfoAsync(result.uri);
    if (fileInfo.size! / 1024 / 1024 > 3) {
      alert('3Mb 이하의 사진을 선택해주세요');
      return;
    }

    let localUri = result.uri;
    let filename = localUri.split('/').pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename!);
    let type = match ? `image/${match[1]}` : `image`;

    let formData = new FormData();
    formData.append('image', { type: type, uri: localUri, name: filename });
    console.log(formData);
    try {
      const res = await uploadImage(formData);
      console.log(res);
      setImage(res.data.location);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();

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
      image={image}
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
      onGetProfileImage={onGetProfileImage}
    />
  );
};

export default UploadProfileContainer;
