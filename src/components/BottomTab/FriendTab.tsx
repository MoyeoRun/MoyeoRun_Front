import { Box } from 'native-base';
import React, { useRef } from 'react';
import CustomWebview from '../common/CustomWebview';

const FriendTab = () => {
  const webview = useRef<any>();

  return (
    <Box>
      <CustomWebview path="friendTab" parentRef={webview} />
    </Box>
  );
};

export default FriendTab;
