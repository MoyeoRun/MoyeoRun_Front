import { useNavigation } from '@react-navigation/core';
import { Box } from 'native-base';
import React, { useEffect, useRef } from 'react';
import { WebViewMessageEvent } from 'react-native-webview';
import CustomWebview from '../common/CustomWebview';

type RunningTabProps = {
  user: User | null;
  openRoomList: Array<Room>;
  currentRoom: Array<Room> | null;
  handleRefresh: () => void;
  singleRunGuideList: Array<any>;
};

const RunningTab = ({
  user,
  openRoomList,
  currentRoom,
  handleRefresh,
  singleRunGuideList,
}: RunningTabProps) => {
  const webview = useRef<any>();
  const navigation = useNavigation();

  const sendProps = () => {
    webview.current.postMessage(
      JSON.stringify({
        type: 'runningTab',
        value: { user, openRoomList, currentRoom, singleRunGuideList },
      }),
    );
  };

  const handleEvent = (event: WebViewMessageEvent) => {
    const data = JSON.parse(event.nativeEvent.data);
    console.log(data);
    switch (data.type) {
      case 'goCreateMultiRoom':
        navigation.navigate('CreateMultiRoom');
        break;
      case 'goReadySingleRun':
        navigation.navigate('ReadySingleRun');
        break;
      case 'goRoomById':
        navigation.navigate('MultiRoom', { roomId: data.value });
        break;
      case 'refresh':
        handleRefresh();
        break;
    }
  };

  useEffect(() => {
    sendProps();
  }, [user, openRoomList, currentRoom, singleRunGuideList]);

  return (
    <Box flex={1}>
      <CustomWebview
        parentRef={webview}
        path="runningTab"
        onLoad={sendProps}
        onMessage={handleEvent}
      />
    </Box>
  );
};

export default RunningTab;
