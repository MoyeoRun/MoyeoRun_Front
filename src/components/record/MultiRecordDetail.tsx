import { useNavigation } from '@react-navigation/core';
import { Box } from 'native-base';
import React, { useEffect, useRef } from 'react';
import { WebViewMessageEvent } from 'react-native-webview';
import CustomWebview from '../common/CustomWebview';
import * as Sharing from 'expo-sharing';
import ViewShot from 'react-native-view-shot';

type MultiRecordDetailProps = {
  multiRoom: Room;
  multiRecord: RunRecord;
  displayUserId: User['id'];
  onChangeDisplayUser: ({ userId, runId }: { userId: User['id']; runId: string }) => void;
};

const MultiRecordDetail = ({
  multiRoom,
  multiRecord,
  displayUserId,
  onChangeDisplayUser,
}: MultiRecordDetailProps) => {
  const webview = useRef<any>();
  const viewShot = useRef<any>();
  const navigation = useNavigation();

  const sendProps = () => {
    webview.current.postMessage(
      JSON.stringify({
        type: 'multiRecordDetail',
        value: { multiRoom, multiRecord, displayUserId },
      }),
    );
  };

  const captureAndShareScreenshot = () => {
    viewShot.current.capture().then((uri: any) => {
      console.log('do something with ', uri);
      Sharing.shareAsync('file://' + uri);
    }),
      (error: any) => console.error('Oops, snapshot failed', error);
  };

  const handleEvent = async (event: WebViewMessageEvent) => {
    const data = JSON.parse(event.nativeEvent.data);
    switch (data.type) {
      case 'changeDisplayUser':
        onChangeDisplayUser(data.value);
        break;
      case 'goAnalysis':
        navigation.navigate('RecordAnalysis', { recordId: data.value });
        break;
      case 'share':
        captureAndShareScreenshot();
        break;
      case 'goBack':
        navigation.goBack();
        break;
    }
  };

  useEffect(() => {
    sendProps();
    console.log({ multiRoom, multiRecord, displayUserId });
  }, [multiRoom, multiRecord, displayUserId]);

  return (
    <ViewShot
      ref={viewShot}
      options={{ format: 'jpg' }}
      style={{
        flex: 1,
      }}
    >
      <CustomWebview
        path="multiRecordDetail"
        parentRef={webview}
        onLoad={sendProps}
        onMessage={handleEvent}
      />
    </ViewShot>
  );
};

export default MultiRecordDetail;
