import { Box, Button, Input, Stack, Text, VStack } from 'native-base';
import PrevArrowIcon from '../../assets/svg/PrevArrowIcon';
import React from 'react';
import Colors from '../../lib/styles/colors';
import { useNavigation } from '@react-navigation/core';

const SubmitButton = ({ fontColor = '#FFFFFF', children, ...props }: any) => (
  <Button
    _text={{ color: '#FFFFFF', fontSize: '14px', fontWeight: '600' }}
    w="100%"
    h="48px"
    p="16px"
    mt="38px"
    bg={Colors.light.tint}
    borderRadius="0px"
    fontFamily="text"
    {...props}
  >
    {children}
  </Button>
);

// const InputForm = () => {

//     return (
//         <Input
//             _focus=""
//         />

//     )
// }
const BodyInfo = () => {
  const [height, setHeight] = React.useState();
  const [weight, setWeight] = React.useState();
  const navigation = useNavigation();

  return (
    <Stack flex={1} alignItems="center" mt="60px">
      <Box pt="60px" w="100%" px="20px">
        <PrevArrowIcon color="black" />
        <Box borderColor="#F5F5F5" borderWidth="2px" my="22.5px" />
        <Box mb="22.5px">
          <Text fontFamily="text" color="#333333" fontSize={19} fontWeight="600">
            신체 정보를 입력해주시면{'\n'}
            효과적인 러닝 데이터를 얻을 수 있어요
          </Text>
        </Box>
        <VStack>
          <Box>
            <Box my="17">
              <Text color="#C4C4C4">키(cm)</Text>
            </Box>
            <Input
              value={height}
              borderRadius="0px"
              // onChange={}
            />
          </Box>
          <Box>
            <Box my="17">
              <Text color="#C4C4C4">몸무게(kg)</Text>
            </Box>
            <Input
              value={weight}
              borderRadius="0px"
              //  onChange={}
            />
          </Box>
          <SubmitButton
            onPress={() => {
              navigation.navigate('Welcome');
            }}
          >
            다음
          </SubmitButton>
        </VStack>
      </Box>
    </Stack>
  );
};

export default BodyInfo;
