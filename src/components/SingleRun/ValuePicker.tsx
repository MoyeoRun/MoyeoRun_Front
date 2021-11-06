import React, { useEffect, useRef, useState } from 'react';
import { Box, HStack, Modal, Text } from 'native-base';
import NumberPlease from 'react-native-number-please';
import { Pressable } from 'react-native';

const Value = ({ placeHolder, onPress, value }: any) => {
  const textStyle = {
    fontFamily: 'text',
    fontSize: '80px',
    color: '#333333',
    fontWeight: 700,
    lineHeight: '103.6px',
    letterSpacing: '2px',
  };
  const subTextStyle = {
    fontFamily: 'text',
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '24px',
    color: '#828282',
  };
  const freeModeTextStyle = {
    fontFamily: 'text',
    fontSize: '32px',
    fontWeight: 600,
    color: '#000000',
  };
  return (
    <Box>
      {placeHolder.id === 'free' ? (
        <Box display="flex" flexDirection="column" alignItems="center" width="100%" mt="80px" _text={freeModeTextStyle}>
          {placeHolder.Typo}
        </Box>
      ) : (
        <Pressable onPress={() => onPress(true)}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box _text={textStyle}>{`${value[0].value}${placeHolder.divide}${value[1].value}`}</Box>
            <Box _text={subTextStyle}>{placeHolder.subTypo}</Box>
          </Box>
        </Pressable>
      )}
    </Box>
  );
};

const TextButton = ({ onPress, children }: any) => (
  <Pressable onPress={onPress}>
    <Box
      m="auto"
      _text={{
        fontSize: 15,
        fontFamily: 'text',
        color: '#007AFF',
        textAlign: 'center',
      }}
    >
      {children}
    </Box>
  </Pressable>
);

const ValuePicker = ({ runMode }: any) => {
  const initDigits = [
    { id: '', label: '.', min: 0, max: 0 },
    { id: '', label: '', min: 0, max: 0 },
  ];
  const distanceDigits = [
    { id: 'first', label: '.', min: 0, max: 50 },
    { id: 'second', label: 'km', min: 0, max: 9 },
  ];
  const timeDigits = [
    { id: 'first', label: '시간', min: 0, max: 12 },
    { id: 'second', label: '분', min: 0, max: 59 },
  ];
  const InitPlaceHolder = {
    time: {
      id: 'time',
      divide: ':',
      Typo: '원하시는 시간을 설정해주세요',
      subTypo: '분',
      modalTypo: '목표시간',
    },
    distance: {
      id: 'distance',
      divide: '.',
      Typo: '원하시는 거리를 설정해주세요',
      subTypo: '킬로미터',
      modalTypo: '목표거리',
    },
    free: {
      id: 'free',
      divide: '',
      Typo: '자유롭게 달려요!',
      subTypo: '',
      modalTypo: '',
    },
  };

  const [isOpen, setIsOpen] = useState(false);
  const [curValue, setCurValue] = useState([
    { id: 'first', value: 0 },
    { id: 'second', value: 0 },
  ]);
  const [placeHolder, setPlaceHolder] = useState(InitPlaceHolder.distance);
  const digitsRef = useRef(initDigits);
  useEffect(() => {
    if (runMode) {
      if (runMode.time) {
        setPlaceHolder(InitPlaceHolder.time);
        digitsRef.current = timeDigits;
      } else if (runMode.distance) {
        setPlaceHolder(InitPlaceHolder.distance);
        digitsRef.current = distanceDigits;
      } else if (runMode.free) {
        setPlaceHolder(InitPlaceHolder.free);
        digitsRef.current = initDigits;
      } else null;
    }
  }, [runMode]);

  return (
    <>
      <Value onPress={setIsOpen} value={curValue} placeHolder={placeHolder}></Value>
      <Modal
        isOpen={isOpen}
        flex={1}
        justifyContent="flex-end"
        alignItems="center"
        bg="rgba(0, 0, 0, 0.4)"
        onClose={() => setIsOpen(false)}
      >
        <Modal.Content w="100%" m="24px" mb="0px" p="24px" bg="#ffffff" borderRadius="0">
          <Box>
            <HStack>
              <TextButton
                onPress={() => {
                  setIsOpen(false);
                }}
              >
                취소
              </TextButton>
              <Box
                mx="auto"
                _text={{
                  fontSize: 15,
                  fontFamily: 'text',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: '#9A99A2',
                }}
              >
                {placeHolder.modalTypo}
              </Box>
              <TextButton
                onPress={() => {
                  setIsOpen(false);
                }}
              >
                완료
              </TextButton>
            </HStack>
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
              {
                <NumberPlease
                  digits={digitsRef.current}
                  values={curValue}
                  onChange={(value) => {
                    setCurValue(value);
                  }}
                  divider={true}
                ></NumberPlease>
              }
            </Box>
          </Box>
        </Modal.Content>
      </Modal>
    </>
  );
};
export default ValuePicker;
