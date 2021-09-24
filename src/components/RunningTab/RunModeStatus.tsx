import React from 'react';
import { HStack, Text, Pressable, Box } from 'native-base';

const Selected = ({ mode, onModeChange, children }: { mode: string; onModeChange: any; children?: any }) => {
  return (
    <Box width="55px" mr="5px" boxSizing="border-box" mb="22px">
      <Pressable
        onPress={() => {
          onModeChange(children);
        }}
      >
        {mode == children ? (
          <Box>
            <Text fontFamily="text" fontSize="18px" fontWeight="500" color="#000000" mb="7px" textAlign="center">
              {children}
            </Text>
            <Box borderWidth="1" />
          </Box>
        ) : (
          <Text fontFamily="text" fontSize="18px" fontWeight="400" color="#828282" textAlign="center">
            {children}
          </Text>
        )}
      </Pressable>
    </Box>
  );
};

const RunModeStatus = ({ mode, onModeChange }: { mode: string; onModeChange: any }) => {
  return (
    <HStack>
      <Selected mode={mode} onModeChange={onModeChange}>
        모여런
      </Selected>
      <Selected mode={mode} onModeChange={onModeChange}>
        개인런
      </Selected>
    </HStack>
  );
};
export default RunModeStatus;
