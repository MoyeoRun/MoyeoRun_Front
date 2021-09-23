import * as React from 'react';
import { Box, Button, Flex, HStack, Stack, Text } from 'native-base';
import NumberPlease from 'react-native-number-please';
import { Pressable } from 'react-native';

const TextButton = (props: any) => (
  <Pressable>
    <Box
      m="auto"
      _text={{
        fontSize: 15,
        fontFamily: 'text',
        color: '#007AFF',
        textAlign: 'center',
      }}
    >
      {props.children}
    </Box>
  </Pressable>
);

const BodyInfoPicker = (props: any) => {
  const order = [
    { id: 'height', label: 'cm', min: 100, max: 200 },
    { id: 'weight', label: 'kg', min: 30, max: 150 },
  ];

  const initialOrder = [
    { id: 'height', value: 150 },
    { id: 'weight', value: 50 },
  ];

  const [orderValues, setOrderValues] = React.useState(initialOrder);

  return (
    <Stack
      flex={1}
      justifyContent="flex-end"
      alignItems="center"
      // p="8px"
      bg="#87868A"
    >
      <Box m="24px" mb="0px" p="24px" w="100%" bg="#FFFFFF">
        <HStack>
          <TextButton>취소</TextButton>
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
          <TextButton>완료</TextButton>
        </HStack>
        <Box>
          <NumberPlease
            digits={order}
            values={orderValues}
            onChange={(nextValues) => setOrderValues(nextValues)}
          />
        </Box>
      </Box>
    </Stack>
  );
};
export default BodyInfoPicker;
