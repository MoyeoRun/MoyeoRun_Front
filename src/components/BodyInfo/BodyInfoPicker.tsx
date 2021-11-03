import * as React from 'react';
import { Box, Button, Flex, HStack, Modal, Stack, Text } from 'native-base';
import NumberPlease from 'react-native-number-please';
import { Pressable } from 'react-native';

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

const digits = [
  { id: 'height', label: 'cm', min: 100, max: 250 },
  { id: 'weight', label: 'kg', min: 30, max: 150 },
];

const BodyInfoPicker = ({ isOpen, value, setValue, setShowPicker }: any) => {
  const [curValue, setCurValue] = React.useState(value);

  React.useEffect(() => {
    console.log(curValue);
  }, [curValue]);

  return (
    <Modal
      isOpen={isOpen}
      flex={1}
      justifyContent="flex-end"
      alignItems="center"
      bg="rgba(0, 0, 0, 0.4)"
      onClose={() => setShowPicker(false)}
    >
      <Modal.Content w="100%" m="24px" mb="0px" p="24px" bg="#ffffff" borderRadius="0">
        <Box>
          <HStack>
            <TextButton
              onPress={() => {
                setShowPicker(false);
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
              신체정보 입력
            </Box>
            <TextButton
              onPress={() => {
                setValue(curValue);
                setShowPicker(false);
              }}
            >
              완료
            </TextButton>
          </HStack>
          <Box>
            <NumberPlease
              digits={digits}
              values={curValue}
              onChange={(values) => setCurValue(values)}
            />
          </Box>
        </Box>
      </Modal.Content>
    </Modal>
  );
};
export default BodyInfoPicker;
