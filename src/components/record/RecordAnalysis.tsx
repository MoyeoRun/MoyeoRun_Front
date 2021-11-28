import { Box } from 'native-base';
import React, { useRef } from 'react';
import { WebViewMessageEvent } from 'react-native-webview';
import CustomWebview from '../common/CustomWebview';

type RecordAnalysisProps = {
  runData: RunData;
};

const RecordAnalysis = ({ runData }: RecordAnalysisProps) => {
  const webview = useRef<any>();

  const sendProps = () => {
    console.log(runData);
    webview.current.postMessage(JSON.stringify({ type: 'recordAnalysis', value: runData }));
  };

  return (
    <Box flex={1}>
      <CustomWebview parentRef={webview} path="recordAnalysis" onLoad={sendProps} />
    </Box>
  );
};

export default RecordAnalysis;
