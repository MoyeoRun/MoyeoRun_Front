import { Box } from 'native-base';
import React, { useEffect, useRef } from 'react';
import { WebViewMessageEvent } from 'react-native-webview';
import CustomWebview from '../common/CustomWebview';

type ReadyMultiRunProps = {
  room: Room;
  userList: Array<Partial<User>>;
};

const ReadyMultiRun = ({ room, userList }: ReadyMultiRunProps) => {
  const webview = useRef<any>();

  const sendProps = () => {
    webview.current.postMessage(
      JSON.stringify({
        type: 'readyMultiRun',
        value: { connectedUser: userList, roomMember: room.multiRoomMember },
      }),
    );
  };

  const handleEvent = (event: WebViewMessageEvent) => {
    const data = JSON.parse(event.nativeEvent.data);
    switch (data.type) {
    }
  };

  useEffect(() => {
    sendProps();
  }, []);

  return (
    <Box flex={1}>
      <CustomWebview
        parentRef={webview}
        path="readyMultiRun"
        onLoad={sendProps}
        onMessage={handleEvent}
      />
    </Box>
  );
};

export default ReadyMultiRun;
