import React from 'react';
import { Box } from 'native-base';
import { Pressable } from 'react-native';

const SubmitButton = ({ formReady, children, onPress, ...props }: any) => (
  <Box
    w="100%"
    h="88px"
    p="15px"
    mt="38px"
    bg={formReady ? '#1162FF' : '#C4C4C4'}
    borderRadius="4px"
    fontFamily="text"
    justifyContent="center"
    alignItems="center"
    position="absolute"
    bottom={0}
    {...props}
  >
    <Pressable onPress={onPress}>
      <Box _text={{ color: '#FFFFFF', fontSize: '14px', fontWeight: '600' }}>{children}</Box>
    </Pressable>
  </Box>
);
export default SubmitButton;
