import { useNavigation } from '@react-navigation/core';
import { Box } from 'native-base';
import React, { useEffect, useRef } from 'react';
import { WebViewMessageEvent } from 'react-native-webview';
import CustomWebview from '../common/CustomWebview';

type RecordTabProps = {
  user: User;
  startWeekDay: string;
  runHistory: RunHistory | null;
  chaneWeek: (day: string) => void;
};

const RecordTab = ({ startWeekDay, runHistory, chaneWeek }: RecordTabProps) => {
  const webview = useRef<any>();
  const navigation = useNavigation();

  const sendProps = () => {
    webview.current.postMessage(
      JSON.stringify({ type: 'recordTab', value: { startWeekDay, runHistory } }),
    );
  };

  useEffect(() => {
    sendProps();
  }, [startWeekDay, runHistory]);

  const handleEvent = async (event: WebViewMessageEvent) => {
    const data = JSON.parse(event.nativeEvent.data);
    switch (data.type) {
      case 'changeWeek': {
        chaneWeek(data.value);
        return;
      }
    }
  };

  return (
    <Box flex={1}>
      <CustomWebview
        parentRef={webview}
        path="recordTab"
        onMessage={handleEvent}
        onLoadEnd={sendProps}
      />
    </Box>
  );
};

export default RecordTab;
