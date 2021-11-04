import { StackActions, useNavigation } from '@react-navigation/native';
import { Box, Pressable, Modal, Button } from 'native-base';
import React, { useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import CheckIcon from '../../assets/svg/CheckIcon';
import PlusIcon from '../../assets/svg/PlusIcon';
import colors from '../../lib/styles/colors';

const PlusButton = ({ onPress }: any) => {
  return (
    <Box mt="12px">
      <Pressable onPress={() => onPress(true)}>
        <PlusIcon size={20}></PlusIcon>
      </Pressable>
    </Box>
  );
};

const HeaderText = ({ children }: any) => (
  <Box
    _text={{
      fontWeight: 600,
      fontSize: 24,
      lineHeight: 28.8,
      color: '#333333',
    }}
  >
    {children}
  </Box>
);
const BodyText = ({ children }: any) => (
  <Box
    _text={{
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 21.6,
      letterSpacing: -0.5,
      color: '#505050',
    }}
  >
    {children}
  </Box>
);

const WideButton = ({ onPress, children, ...props }: any) => (
  <Pressable
    _text={{
      color: 'white',
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 21.6,
    }}
    w="100%"
    h="56px"
    px="20px"
    mt="66px"
    bg={colors.light.tint}
    borderRadius="4px"
    fontFamily="text"
    display="flex"
    justifyContent="center"
    alignItems="center"
    onPress={onPress}
    {...props}
  >
    <Box
      _text={{
        fontWeight: 600,
        fontSize: 18,
        lineHeight: 21.6,
        color: 'white',
      }}
    >
      {children}
    </Box>
  </Pressable>
);

const MakeRoomButton = ({ runMode, setRunMode }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigation = useNavigation();
  return (
    <>
      <PlusButton onPress={setIsOpen} />
      <Modal
        isOpen={isOpen}
        flex={1}
        size="full"
        justifyContent="flex-end"
        bg="rgba(0, 0, 0, 0.4)"
        onClose={() => setIsOpen(false)}
      >
        <Modal.Content w="100%" m="24px" mb="0px" bg="#ffffff" borderRadius="12">
          <Modal.CloseButton />
          <Modal.Header
            borderBottomWidth={0}
            display="flex"
            justifyContent="center"
            alignItems="center"
            pt="24px"
          >
            <HeaderText>방 만들기</HeaderText>
          </Modal.Header>
          <Modal.Body
            display="flex"
            justifyContent="center"
            alignItems="center"
            pt="50px"
            pb="70px"
          >
            <BodyText> 목표를 설정하고 함께 뛸 수 있어요! </BodyText>
            <WideButton
              onPress={() => {
                navigation.dispatch(StackActions.push('MoyeoRunRoom'));
                setIsOpen(false);
              }}
            >
              방 만들기
            </WideButton>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};
export default MakeRoomButton;
