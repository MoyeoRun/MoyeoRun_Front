import { useNavigation } from '@react-navigation/core';
import { Box } from 'native-base';
import React, { useRef } from 'react';
import { WebViewMessageEvent } from 'react-native-webview';
import CustomWebview from '../common/CustomWebview';

type RecordDetailProps = {};

const RecordDetail = ({}: RecordDetailProps) => {
  const webview = useRef<any>();
  const navigation = useNavigation();

  const sendProps = () => {
    webview.current.postMessage(JSON.stringify({ type: 'recordDetail', value: { user } }));
  };

  const handleEvent = async (event: WebViewMessageEvent) => {
    const data = JSON.parse(event.nativeEvent.data);
    switch (data.type) {
      case 'recordDetail': {
        navigation.navigate('Welcome');
        return;
      }
    }
  };

  return (
    <Box>
      <CustomWebview
        path="recordDetail"
        parentRef={webview}
        onLoad={sendProps}
        onMessage={handleEvent}
      />
    </Box>
  );
};

export default RecordDetail;
