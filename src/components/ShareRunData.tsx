import React, { useRef } from 'react';
import ViewShot from 'react-native-view-shot';
import * as Sharing from 'expo-sharing';
import { LogoMini } from '../assets/svg';
import { AlertDialog, Box, Text } from 'native-base';
import { Dimensions } from 'react-native';
import WebView from 'react-native-webview';

type ShareRecordProps = {
  open: boolean;
  setOpen: (boolean: boolean) => void;
  runData: RunData;
};

const ShareRecord = ({ open, setOpen, runData }: ShareRecordProps) => {
  const viewShot = useRef<any>();
  const cancelRef = useRef<any>();
  const windowWidth = Dimensions.get('window').width;
  const captureAndShareScreenshot = () => {
    viewShot.current.capture().then((uri: any) => {
      console.log('do something with ', uri);
      Sharing.shareAsync('file://' + uri);
    }),
      (error: any) => console.error('Oops, snapshot failed', error);
  };

  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      isOpen={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <ViewShot
        ref={viewShot}
        options={{ format: 'jpg' }}
        style={{
          flex: 1,
        }}
      >
        <Box
          width={windowWidth}
          height={windowWidth}
          position="absolute"
          top="0"
          left="0"
          display="flex"
          justifyContent="space-between"
          zIndex={1000}
        >
          <LogoMini />
          <Box
            width="100%"
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Text fontWeight="700" fontSize="40px" fontFamily="text" color="#1162FF">
              3Km
            </Text>
            <Text fontWeight="700" fontSize="40px" fontFamily="text" color="#1162FF">
              6' 12"
            </Text>
            <Text fontWeight="700" fontSize="40px" fontFamily="text" color="#1162FF">
              18:36
            </Text>
          </Box>
        </Box>

        <WebView
          source={{ uri: 'https://moyeorun-web.netlify.app/service/testMap' }}
          textZoom={100}
        />
      </ViewShot>
    </AlertDialog>
  );
};

export default ShareRecord;
