import { useNavigation } from '@react-navigation/core';
import { Box } from 'native-base';
import React, { useEffect, useRef } from 'react';
import { WebViewMessageEvent } from 'react-native-webview';
import CustomWebview from '../common/CustomWebview';

type RecordTabProps = {
  user: User | null;
  singleRecordList: RunHistory | null;
  multiRecordList: { multiRoom: Room; rank: number } | null;
  getRecordList: ({
    startDay,
    endDay,
    runType,
  }: {
    startDay: string;
    endDay: string;
    runType: string;
  }) => void;
};

const RecordTab = ({ user, singleRecordList, multiRecordList, getRecordList }: RecordTabProps) => {
  const webview = useRef<any>();
  const sendProps = () => {
    // console.log('전달', singleRecordList, multiRecordList);
    webview.current.postMessage(
      JSON.stringify({ type: 'recordTab', value: { singleRecordList, multiRecordList } }),
    );
  };

  useEffect(() => {
    sendProps();
  }, [singleRecordList, multiRecordList]);

  const handleEvent = async (event: WebViewMessageEvent) => {
    const data = JSON.parse(event.nativeEvent.data);
    switch (data.type) {
      case 'recordList': {
        getRecordList(data.value);
        return;
      }
      case 'console': {
        console.log(data.value);
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
