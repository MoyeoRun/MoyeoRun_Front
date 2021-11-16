import { useNavigation } from '@react-navigation/core';
import { Box } from 'native-base';
import React, { useRef } from 'react';
import { WebViewMessageEvent } from 'react-native-webview';
import CustomWebview from './common/CustomWebview';

type MyPageProps = {
  user: User | null;
};

const MyPage = ({ user }: MyPageProps) => {
  const webview = useRef<any>();
  const navigation = useNavigation();

  const sendProps = () => {
    webview.current.postMessage(JSON.stringify({ type: 'MyPage', value: { user } }));
  };

  const handleEvent = async (event: WebViewMessageEvent) => {
    const data = JSON.parse(event.nativeEvent.data);
    switch (data.type) {
      case 'MyPage': {
        return;
      }
    }
  };

  return (
    <Box>
      <CustomWebview path="MyPage" parentRef={webview} onLoad={sendProps} onMessage={handleEvent} />
    </Box>
  );
};

export default MyPage;
