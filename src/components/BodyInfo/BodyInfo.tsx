import { Box, Button, Input, Stack, Text, VStack } from 'native-base';
import PrevArrowIcon from '../../assets/svg/PrevArrowIcon';
import React from 'react';
import Colors from '../../lib/styles/colors';
import BodyInfoPicker from './BodyInfoPicker';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const SubmitButton = ({ fontColor = '#FFFFFF', children, ...props }: any) => (
  <Button
    _text={{ color: '#FFFFFF', fontSize: '14px', fontWeight: '600' }}
    w="100%"
    h="48px"
    p="15px"
    mt="38px"
    bg={Colors.light.tint}
    borderRadius="4px"
    fontFamily="text"
    {...props}
  >
    {children}
  </Button>
);

const InputForm = ({ value, focus }: any) => {
  return (
    <Pressable
      onPress={() => {
        focus(true);
      }}
    >
      <Box
        w="100%"
        h="48px"
        pl="15px"
        borderRadius="2px"
        borderColor="#D4D4D4"
        borderWidth="1px"
        display="flex"
        justifyContent="center"
      >
        {value}
      </Box>
    </Pressable>
  );
};

type BodyInfoProps = {
  onUploadBodyInfo: (weight: number, height: number) => void;
};

const BodyInfo = ({ onUploadBodyInfo }: BodyInfoProps) => {
  const [Info, setInfo] = React.useState([
    { id: 'height', value: 10 },
    { id: 'weight', value: 50 },
  ]);
  const [showPicker, setShowPicker] = React.useState(false);
  const onSubmit = () => {
    onUploadBodyInfo(Info[0].value, Info[1].value);
  };

  return (
    <Stack flex={1} alignItems="center" pt="60px" bg="#ffffff">
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
            <Box mt="17px" mb="10px">
              <Text color="#C4C4C4">키(cm)</Text>
            </Box>
            <InputForm value={Info[0].value} focus={setShowPicker} />
          </Box>
          <Box>
            <Box mt="17px" mb="10px">
              <Text color="#C4C4C4">몸무게(kg)</Text>
            </Box>

            <InputForm value={Info[1].value} focus={setShowPicker} />
          </Box>
<<<<<<< HEAD
          <SubmitButton
            onPress={() => {
              // navigation.navigate('Welcome');
            }}
          >
            다음
          </SubmitButton>
=======
          <SubmitButton onPress={onSubmit}>다음</SubmitButton>
>>>>>>> develop
        </VStack>
      </Box>
      <BodyInfoPicker
        isOpen={showPicker}
        value={Info}
        setValue={setInfo}
        setShowPicker={setShowPicker}
      />
    </Stack>
  );
};

export default BodyInfo;
