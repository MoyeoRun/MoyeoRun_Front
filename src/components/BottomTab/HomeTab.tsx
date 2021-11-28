import { Box } from 'native-base';
import React, { useRef, useState } from 'react';
import { WebViewMessageEvent } from 'react-native-webview';
import CustomWebview from '../common/CustomWebview';
import ShareRecord from '../ShareRunData';

type HomeTabProps = {
  runList: Array<object>;
  missionList: Array<object>;
  lastRecordList: Array<object>;
  user: any;
};

const HomeTab = ({ runList, missionList, lastRecordList, user }: HomeTabProps) => {
  const webview = useRef<any>();
  const [open, setOpen] = useState(false);
  const sendProps = () => {
    webview.current.postMessage(
      JSON.stringify({ type: 'homeTab', value: { runList, missionList, lastRecordList, user } }),
    );
  };

  const handleEvent = (event: WebViewMessageEvent) => {
    const data = JSON.parse(event.nativeEvent.data);
    switch (data.type) {
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
      <ShareRecord open={true} />
    </Box>
  );
};

export default HomeTab;
