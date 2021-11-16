import { Box } from 'native-base';
import React, { useRef } from 'react';
import CustomWebview from '../common/CustomWebview';

const MissionTab = () => {
  const webview = useRef<any>();

  return (
    <Box>
      <CustomWebview path="missionTab" parentRef={webview} />
    </Box>
  );
};

export default MissionTab;
