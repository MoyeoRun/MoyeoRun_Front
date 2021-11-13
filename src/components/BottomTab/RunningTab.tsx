import { useNavigation } from '@react-navigation/core';
import { Box } from 'native-base';
import React, { useRef } from 'react';
import { WebViewMessageEvent } from 'react-native-webview';
import CustomWebview from './../common/CustomWebview';

type RunningTabProps = {
  user: object;
  moyeoRunList: Array<any>;
  singleRunGuideList: Array<any>;
};

const RunningTab = ({ user, moyeoRunList, singleRunGuideList }: RunningTabProps) => {
  const webview = useRef<any>();
  const navigation = useNavigation();

  const sendProps = () => {
    webview.current.postMessage(
      JSON.stringify({ type: 'runningTab', value: { user, moyeoRunList, singleRunGuideList } }),
    );
  };

  const handleEvent = (event: WebViewMessageEvent) => {
    const data = JSON.parse(event.nativeEvent.data);
    switch (data.type) {
      case 'goReadySingleRun': {
        navigation.reset({ index: 0, routes: [{ name: 'ReadySingleRun' }] });
        return;
      }
    }
  };

  return (
    <Box flex={1}>
      <CustomWebview
        parentRef={webview}
        path="runningTab"
        onLoad={sendProps}
        onMessage={handleEvent}
      />
      ;
    </Box>
  );
};

export default RunningTab;
