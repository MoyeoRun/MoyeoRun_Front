import { useNavigation } from '@react-navigation/core';
import { Box } from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import { WebViewMessageEvent } from 'react-native-webview';
import CustomWebview from '../common/CustomWebview';

type RecordTabProps = {
  endDay: Date;
  mode: number;
  singleRecordList: SingleRunHistory | null;
  multiRecordList: MultiRunHistory | null;
  onQueryChange: ({ type, value }: { type: 'mode' | 'endDay'; value: any }) => void;
};

const RecordTab = ({
  endDay,
  mode,
  singleRecordList,
  multiRecordList,
  onQueryChange,
}: RecordTabProps) => {
  const [isLoadEnd, setIsLoadEnd] = useState(false);
  const webview = useRef<any>();
  const navigation = useNavigation();

  const handleEvent = async (event: WebViewMessageEvent) => {
    const data = JSON.parse(event.nativeEvent.data);
    switch (data.type) {
      case 'queryChange':
        onQueryChange(data.value);
        break;
      case 'goMultiDetail':
        navigation.navigate('MultiRecordDetail', { recordId: data.value });
        break;
      case 'goSingleDetail':
        navigation.navigate('SingleRecordDetail', { recordId: data.value });
        break;
    }
  };

  useEffect(() => {
    if (isLoadEnd) {
      webview.current.postMessage(JSON.stringify({ type: 'endDay', value: endDay.toISOString() }));
    }
  }, [endDay, isLoadEnd]);

  useEffect(() => {
    if (isLoadEnd) {
      webview.current.postMessage(JSON.stringify({ type: 'mode', value: mode }));
    }
  }, [mode, isLoadEnd]);

  useEffect(() => {
    if (isLoadEnd) {
      webview.current.postMessage(
        JSON.stringify({ type: 'singleRecordList', value: singleRecordList }),
      );
    }
  }, [singleRecordList, isLoadEnd]);

  useEffect(() => {
    if (isLoadEnd) {
      webview.current.postMessage(
        JSON.stringify({ type: 'multiRecordList', value: multiRecordList }),
      );
    }
  }, [multiRecordList, isLoadEnd]);

  return (
    <Box flex={1}>
      <CustomWebview
        parentRef={webview}
        path="recordTab"
        onMessage={handleEvent}
        onLoadEnd={() => {
          setIsLoadEnd(true);
        }}
      />
    </Box>
  );
};

export default RecordTab;
