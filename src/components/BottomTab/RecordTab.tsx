import { useNavigation } from '@react-navigation/core';
import { Box } from 'native-base';
import React, { useEffect, useRef } from 'react';
import { WebViewMessageEvent } from 'react-native-webview';
import CustomWebview from '../common/CustomWebview';

type RecordTabProps = {
  endDay: Date;
  mode: 'single' | 'multi';
  singleRecordList: SingleRunHistory | null;
  multiRecordList: MultiRunHistory | null;
  onQueryChange: ({ key, value }: { key: 'mode' | 'endDay'; value: any }) => void;
};

const RecordTab = ({
  endDay,
  mode,
  singleRecordList,
  multiRecordList,
  onQueryChange,
}: RecordTabProps) => {
  const webview = useRef<any>();
  const navigation = useNavigation();

  const handleEvent = async (event: WebViewMessageEvent) => {
    const data = JSON.parse(event.nativeEvent.data);
    switch (data.type) {
      case 'queryChange':
        onQueryChange(data.value);
        break;
      case 'goDetail':
        navigation.navigate('RecordDetail', { recordId: data.value });
        break;
    }
  };

  useEffect(() => {}, [endDay]);
  useEffect(() => {}, [mode]);
  useEffect(() => {}, [singleRecordList]);
  useEffect(() => {}, [multiRecordList]);

  return (
    <Box flex={1}>
      <CustomWebview parentRef={webview} path="recordTab" onMessage={handleEvent} />
    </Box>
  );
};

export default RecordTab;
