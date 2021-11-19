import { useNavigation } from '@react-navigation/core';
import { Box } from 'native-base';
import React, { useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebViewMessageEvent } from 'react-native-webview';
import CustomWebview from '../common/CustomWebview';

type ReadySingleRunProps = {
  goSingleRun: ({
    targetTime,
    targetDistance,
  }: {
    targetTime: number | null;
    targetDistance: number | null;
  }) => void;
};

const ReadySingleRun = ({ goSingleRun }: ReadySingleRunProps) => {
  const webview = useRef<any>();
  const navigation = useNavigation();

  const sendProps = () => {
    webview.current.postMessage(JSON.stringify({ type: 'ReadySingleRun', value: {} }));
  };

  const handleEvent = (event: WebViewMessageEvent) => {
    const data = JSON.parse(event.nativeEvent.data);
    switch (data.type) {
      case 'goSingleRun': {
        goSingleRun(data.value);
        return;
      }
      case 'goBack': {
        navigation.reset({
          index: 0,
          routes: [{ name: 'BottomTab', state: { routes: [{ name: 'Running' }] } }],
        });
        return;
      }
    }
  };

  return (
    <SafeAreaView mode="padding" style={{ flex: 1, backgroundColor: 'white' }}>
      <CustomWebview
        parentRef={webview}
        path="readySingleRun"
        onLoad={sendProps}
        onMessage={handleEvent}
      />
    </SafeAreaView>
  );
};

export default ReadySingleRun;
