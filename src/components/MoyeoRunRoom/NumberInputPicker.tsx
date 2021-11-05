import React, { useState } from 'react';
import { Box, HStack, Modal } from 'native-base';
import { Pressable } from 'react-native';
import CustomPicker from '../common/CustomPicker';
import { digit, digitValue } from '../common/CustomPicker';
import { NumberInputIcon } from '../../assets/svg';

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

const NumberInputForm = ({ values, onPress }: { values: Array<digitValue>; onPress: any }) => {
  let displayValue: string = '';

  for (let i of values) {
    let value,
      label = '';
    typeof i.value === 'number' ? (value = i.value.toString()) : (value = i.value);

    i.value === '' ? null : i.inputLabel ? (label = i.inputLabel) : (label = '');

    displayValue = displayValue + value + label;
  }

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
        _text={{
          color: '#111111',
          fontSize: 21,
          fontWeight: 500,
          lineHeight: 25,
        }}
      >
        {displayValue}
        <Box position="absolute" right={18}>
          <NumberInputIcon />
        </Box>
      </Box>
    </Pressable>
  );
};

const NumberInputPicker = ({
  values,
  setValue,
  digits,
}: {
  values: Array<digitValue>;
  setValue: any;
  digits: Array<digit>;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 화면에 보이는 인풋 창 관련 컴포넌트 */}
      <NumberInputForm values={values} onPress={setIsOpen}></NumberInputForm>
      {/* 인풋 창 클릭시 나타나는 모달 창 컴포넌트 */}
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
              {digits.map((digit) => (
                <CustomPicker digit={digit} setValue={setValue} values={values} />
              ))}
            </Box>
          </Box>
        </Modal.Content>
      </Modal>
    </>
  );
};
export default NumberInputPicker;
