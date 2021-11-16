import { useNavigation } from '@react-navigation/core';
import { Box } from 'native-base';
import React, { useRef } from 'react';
import { WebViewMessageEvent } from 'react-native-webview';
import CustomWebview from './common/CustomWebview';

type UploadProfileProps = {
  user: User | null;
  onUploadProfile: ({ nickName, weight, height }: Partial<User>) => void;
};

const UploadProfile = ({ user, onUploadProfile }: UploadProfileProps) => {
  const webview = useRef<any>();
  const navigation = useNavigation();

  const sendProps = () => {
    webview.current.postMessage(JSON.stringify({ type: 'runningTab', value: { user } }));
  };

  const handleEvent = async (event: WebViewMessageEvent) => {
    const data = JSON.parse(event.nativeEvent.data);
    switch (data.type) {
      case 'uploadProfile': {
        await onUploadProfile(data.value);
        navigation.navigate('Welcome');
        return;
      }
    }
  };

  return (
    <Box>
      <CustomWebview
        path="uploadProfile"
        parentRef={webview}
        onLoad={sendProps}
        onMessage={handleEvent}
      />
    </Box>
  );
};

export default UploadProfile;
