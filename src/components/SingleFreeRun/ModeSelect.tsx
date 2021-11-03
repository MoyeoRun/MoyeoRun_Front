import { Box, VStack, Modal } from 'native-base';
import React, { useState } from 'react';
import { Pressable } from 'react-native';
import CheckIcon from '../../assets/svg/CheckIcon';
import ToggleArrowIcon from '../../assets/svg/ToggleArrowIcon';

const ModeCheck = ({ onPress, thisMode, children }: any) => (
  <Pressable onPress={onPress}>
    <Box width="100%" display="flex" alignItems="center" justifyContent="space-between" flexDirection="row">
      <Box
        ml="7px"
        my="28px"
        _text={{
          fontSize: 24,
          fontFamily: 'text',
          fontWeight: 500,
          color: '#505050',
          textAlign: 'center',
          lineHeight: 28,
        }}
      >
        {children}
      </Box>
      <Box>{thisMode ? <CheckIcon /> : null}</Box>
    </Box>
  </Pressable>
);

const ModeChange = ({ runMode, onPress }: { runMode: string; onPress: any }) => {
  return (
    <Pressable onPress={onPress}>
      <Box
        width="100px"
        height="40px"
        backgroundColor="white"
        borderRadius="40px"
        shadow={1}
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        _text={{ fontSize: 18, fontWeight: 400 }}
      >
        {runMode}
        <Box ml="10px">
          <ToggleArrowIcon />
        </Box>
      </Box>
    </Pressable>
  );
};

const ModeSelect = ({ runMode, setRunMode }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const runModeInit = {
    time: false,
    distance: false,
    free: false,
    type: '선택',
  };

  return (
    <>
      <ModeChange runMode={runMode.type} onPress={setIsOpen} />
      <Modal
        isOpen={isOpen}
        flex={1}
        justifyContent="flex-end"
        bg="rgba(0, 0, 0, 0.4)"
        onClose={() => setIsOpen(false)}
      >
        <Modal.Content w="100%" m="24px" mb="0px" p="24px" bg="#ffffff" borderRadius="0">
          <Box>
            <VStack alignItems="baseline" justifyContent="flex-start">
              <ModeCheck
                onPress={() => {
                  setRunMode({ ...runModeInit, free: true, type: '자유' });
                  setIsOpen(false);
                }}
                thisMode={runMode.free}
              >
                자유
              </ModeCheck>
              <Box borderWidth="0.5px" width="100%" mx="27px" borderColor="#D1D1D6" />
              <ModeCheck
                onPress={() => {
                  setRunMode({ ...runModeInit, time: true, type: '시간' });
                  setIsOpen(false);
                }}
                thisMode={runMode.time}
              >
                시간
              </ModeCheck>
              <Box borderWidth="0.5px" width="100%" mx="27px" borderColor="#D1D1D6" />

              <ModeCheck
                onPress={() => {
                  setRunMode({ ...runModeInit, distance: true, type: '거리' });
                  setIsOpen(false);
                }}
                thisMode={runMode.distance}
              >
                거리
              </ModeCheck>
            </VStack>
          </Box>
        </Modal.Content>
      </Modal>
    </>
  );
};
export default ModeSelect;
