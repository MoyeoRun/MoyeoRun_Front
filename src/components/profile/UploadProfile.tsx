import { Box } from 'native-base';
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { WebViewMessageEvent } from 'react-native-webview';
import CustomWebview from '../common/CustomWebview';

type UploadProfileProps = {
  user: User | null;
  image: string | null;
  isUniqueNickName: boolean;
  step: 'uploadProfile' | 'uploadBodyInfo' | 'uploadNickName';
  weight: number;
  height: number;
  nickName: string;
  setWeight: Dispatch<SetStateAction<number>>;
  setHeight: Dispatch<SetStateAction<number>>;
  setStep: Dispatch<SetStateAction<'uploadProfile' | 'uploadBodyInfo' | 'uploadNickName'>>;
  onChangeNickName: (data: string) => void;
  onNickNameCheck: (data: string) => void;
  onUploadProfile: () => void;
  onUploadProfileImage: (image: FormData) => void;
};

const UploadProfile = ({
  step,
  image,
  user,
  isUniqueNickName,
  weight,
  height,
  nickName,
  setWeight,
  setHeight,
  setStep,
  onChangeNickName,
  onNickNameCheck,
  onUploadProfile,
  onUploadProfileImage,
}: UploadProfileProps) => {
  const webview = useRef<any>();

  const sendProps = () => {
    switch (step) {
      case 'uploadProfile':
        webview.current.postMessage(
          JSON.stringify({
            type: 'uploadProfile',
            value: { user, weight, height, nickName, image },
          }),
        );
        break;
      case 'uploadBodyInfo':
        webview.current.postMessage(
          JSON.stringify({ type: 'uploadBodyInfo', value: { weight, height } }),
        );
        break;
      case 'uploadNickName':
        console.log({ type: 'uploadNickName', value: { isUniqueNickName } });
        webview.current.postMessage(
          JSON.stringify({ type: 'uploadNickName', value: { isUniqueNickName } }),
        );
        break;
    }
  };

  const handleEvent = async (event: WebViewMessageEvent) => {
    const data = JSON.parse(event.nativeEvent.data);
    switch (data.type) {
      case 'uploadProfile':
        onUploadProfile();
        break;
      case 'uploadProfileImage':
        onUploadProfileImage(data.value);
        break;
      case 'changeWeight':
        setWeight(data.value);
        break;
      case 'changeHeight':
        setHeight(data.value);
        break;
      case 'uploadNickName':
        onChangeNickName(data.value);
        break;
      case 'checkNickName':
        await onNickNameCheck(data.value);
        break;
      case 'handleNextStep':
        if (step === 'uploadBodyInfo') setStep('uploadNickName');
        if (step === 'uploadNickName') setStep('uploadProfile');
        break;
      case 'handlePrevtStep':
        if (step === 'uploadNickName') setStep('uploadBodyInfo');
        if (step === 'uploadProfile') setStep('uploadNickName');
        break;
    }
  };

  useEffect(() => {
    sendProps();
  }, [step, user, weight, height, nickName, isUniqueNickName, image]);

  return (
    <Box flex={1}>
      <CustomWebview path={step} parentRef={webview} onLoad={sendProps} onMessage={handleEvent} />
    </Box>
  );
};

export default UploadProfile;
