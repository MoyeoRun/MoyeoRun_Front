import React, { useEffect, useRef, useState } from 'react';
import { Box, HStack, Modal, Text } from 'native-base';
import NumberPlease from 'react-native-number-please';
import { Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CustomPicker from '../common/CustomPicker';

const NumberInputForm = ({ value, focus, onPress }: any) => {
  return (
    <Pressable
      onPress={() => {
        onPress(true);
      }}
    >
      <Box
        w="100%"
        h="56px"
        pl="15px"
        borderRadius="2px"
        borderColor="#D4D4D4"
        borderWidth="1px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {value}
      </Box>
    </Pressable>
  );
};

// const Value = ({ placeHolder, onPress, value }: any) => {
//   const textStyle = {
//     fontFamily: 'text',
//     fontSize: '80px',
//     color: '#333333',
//     fontWeight: 700,
//     lineHeight: '103.6px',
//     letterSpacing: '2px',
//   };
//   const subTextStyle = {
//     fontFamily: 'text',
//     fontSize: '20px',
//     fontWeight: 400,
//     lineHeight: '24px',
//     color: '#828282',
//   };
//   const freeModeTextStyle = {
//     fontFamily: 'text',
//     fontSize: '32px',
//     fontWeight: 600,
//     color: '#000000',
//   };
//   return (
//     <Box>
//       {placeHolder.id === 'free' ? (
//         <Box
//           display="flex"
//           flexDirection="column"
//           alignItems="center"
//           width="100%"
//           mt="80px"
//           _text={freeModeTextStyle}
//         >
//           {placeHolder.Typo}
//         </Box>
//       ) : (
//         <Pressable onPress={() => onPress(true)}>
//           <Box display="flex" flexDirection="column" alignItems="center">
//             <Box _text={textStyle}>{`${value[0].value}${placeHolder.divide}${value[1].value}`}</Box>
//             <Box _text={subTextStyle}>{placeHolder.subTypo}</Box>
//           </Box>
//         </Pressable>
//       )}
//     </Box>
//   );
// };

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

const NumberInputPicker = ({ runMode, value }: any) => {
  const strArr = ['오후', '오전'];
  const initDigits = { label: '.', numRange: { min: 0, max: 200 } };
  const strDigits = { label: 'str', strRange: strArr };

  const startTimeDigits = [
    { id: 'slot', label: '', min: '오전', max: '오후' },
    { id: 'first', label: '.', min: 0, max: 50 },
    { id: 'second', label: 'km', min: 0, max: 9 },
  ];

  const distanceDigits = [
    { id: 'first', label: '.', min: 0, max: 50 },
    { id: 'second', label: 'km', min: 0, max: 9 },
  ];
  const timeLimitDigits = [
    { id: 'first', label: '시', min: 0, max: 24 },
    { id: 'second', label: '분', min: 0, max: 59 },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [curValue, setCurValue] = useState();
  // useEffect(() => {
  //   if (runMode) {
  //     if (runMode.time) {
  //       setPlaceHolder(InitPlaceHolder.time);
  //       digitsRef.current = timeDigits;
  //     } else if (runMode.distance) {
  //       setPlaceHolder(InitPlaceHolder.distance);
  //       digitsRef.current = distanceDigits;
  //     } else if (runMode.free) {
  //       setPlaceHolder(InitPlaceHolder.free);
  //       digitsRef.current = initDigits;
  //     } else null;
  //   }
  // }, [runMode]);

  return (
    <>
      <NumberInputForm
        onPress={setIsOpen}
        // value={curValue}
        // placeHolder={placeHolder}
      ></NumberInputForm>

      <Modal
        isOpen={isOpen}
        flex={1}
        justifyContent="center"
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
              ></Box>
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
                <>
                  <Box m="0">
                    {<CustomPicker digits={initDigits} increProps={10} setValue={setCurValue} />}
                  </Box>
                </>
              }
            </Box>
          </Box>
        </Modal.Content>
      </Modal>
    </>
  );
};
export default NumberInputPicker;
