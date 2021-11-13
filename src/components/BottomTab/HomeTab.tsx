import { Box } from 'native-base';
import React, { useRef } from 'react';
import { WebViewMessageEvent } from 'react-native-webview';
import CustomWebview from './../common/CustomWebview';

type HomeTabProps = {
  runList: Array<object>;
  missionList: Array<object>;
  lastRecordList: Array<object>;
  user: any;
  onLogout: () => void;
};

const HomeTab = ({ onLogout, runList, missionList, lastRecordList, user }: HomeTabProps) => {
  const webview = useRef<any>();

  const sendProps = () => {
    webview.current.postMessage(
      JSON.stringify({ type: 'homeTab', value: { runList, missionList, lastRecordList, user } }),
    );
  };

  const handleEvent = (event: WebViewMessageEvent) => {
    const data = JSON.parse(event.nativeEvent.data);
    switch (data.type) {
      case 'logout': {
        onLogout();
        return;
      }
    }
  };

  return (
    <Box flex={1}>
      <CustomWebview
        parentRef={webview}
        path="homeTab"
        onLoad={sendProps}
        onMessage={handleEvent}
      />
      ;
    </Box>
  );
};

export default HomeTab;
