import { useNavigation } from '@react-navigation/core';
import { Box } from 'native-base';
import React, { useEffect, useRef } from 'react';
import { WebViewMessageEvent } from 'react-native-webview';
import CustomWebview from '../common/CustomWebview';

type SingleRecordDetailProps = {
  singleRecord: RunRecord;
};

const SingleRecordDetail = ({ singleRecord }: SingleRecordDetailProps) => {
  const webview = useRef<any>();
  const navigation = useNavigation();

  const sendProps = () => {
    webview.current.postMessage(
      JSON.stringify({ type: 'singleRecordDetail', value: singleRecord }),
    );
  };

  const handleEvent = async (event: WebViewMessageEvent) => {
    const data = JSON.parse(event.nativeEvent.data);
    switch (data.type) {
      case 'goAnalysis': {
        navigation.navigate('RecordAnalysis', { recordId: data.value });
        return;
      }
    }
  };

  useEffect(() => {
    sendProps();
  }, [singleRecord]);

  return (
    <Box flex={1}>
      <CustomWebview
        path="singleRecordDetail"
        parentRef={webview}
        onLoad={sendProps}
        onMessage={handleEvent}
      />
    </Box>
  );
};

export default SingleRecordDetail;
