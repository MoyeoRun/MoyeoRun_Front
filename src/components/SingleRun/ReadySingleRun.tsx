import { useNavigation } from '@react-navigation/core';
import { Box } from 'native-base';
import React, { useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebViewMessageEvent } from 'react-native-webview';
import CustomWebview from '../common/CustomWebview';

type ReadySingleRunProps = {
  goSingleRun: ({ type, targetTime, targetDistance }: Partial<RunRecord>) => void;
};

const ReadySingleRun = ({ goSingleRun }: ReadySingleRunProps) => {
  const webview = useRef<any>();
  const navigation = useNavigation();

  const handleEvent = (event: WebViewMessageEvent) => {
    const data = JSON.parse(event.nativeEvent.data);
    console.log(data);
    switch (data.type) {
      case 'goSingleRun':
        goSingleRun(data.value);
        break;
      case 'goBack':
        navigation.reset({
          index: 0,
          routes: [{ name: 'BottomTab', state: { routes: [{ name: 'Running' }] } }],
        });
        break;
    }
  };

  return (
    <SafeAreaView mode="padding" style={{ flex: 1, backgroundColor: 'white' }}>
      <CustomWebview parentRef={webview} path="readySingleRun" onMessage={handleEvent} />
    </SafeAreaView>
  );
};

export default ReadySingleRun;
