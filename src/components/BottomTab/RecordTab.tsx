import { useNavigation } from '@react-navigation/core';
import { Box } from 'native-base';
import React, { useRef } from 'react';
import { WebViewMessageEvent } from 'react-native-webview';
import CustomWebview from '../common/CustomWebview';

type RecordTabProps = {
  startWeekDay: string;
  runHistory: RunHistory | null;
  chaneWeek: (day: string) => void;
};

const RecordTab = ({ startWeekDay, runHistory, chaneWeek }: RecordTabProps) => {
  const webview = useRef<any>();
  const navigation = useNavigation();

  const sendProps = () => {
    webview.current.postMessage(
      JSON.stringify({ type: 'runningTab', value: { startWeekDay, runHistory } }),
    );
  };

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
