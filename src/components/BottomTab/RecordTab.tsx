import { useNavigation } from '@react-navigation/core';
import { Box } from 'native-base';
import React, { useEffect, useRef } from 'react';
import { WebViewMessageEvent } from 'react-native-webview';
import CustomWebview from '../common/CustomWebview';

type RecordTabProps = {
  user: User | null;
  runHistory: RunHistory | null;
  runRecord: RunRecord | null;
  getRunHistory: ({
    startDay,
    endDay,
    runType,
  }: {
    startDay: string;
    endDay: string;
    runType: string;
  }) => void;
  getRunRecord: ({ id, runType }: { id: string; runType: string }) => void;
};

const RecordTab = ({ runHistory, runRecord, getRunHistory, getRunRecord }: RecordTabProps) => {
  const webview = useRef<any>();
  const sendProps = () => {
    webview.current.postMessage(
      JSON.stringify({ type: 'recordTab', value: { runHistory, runRecord } }),
    );
  };

  useEffect(() => {
    sendProps();
  }, [runHistory, runRecord]);

  const handleEvent = async (event: WebViewMessageEvent) => {
    const data = JSON.parse(event.nativeEvent.data);
    switch (data.type) {
      case 'runHistory': {
        getRunHistory(data.value);
        return;
      }
      case 'runRecord': {
        getRunRecord(data.value);
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
