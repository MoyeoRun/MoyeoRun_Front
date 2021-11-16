import { useNavigation } from '@react-navigation/core';
import { Button, Center, Text } from 'native-base';
import React from 'react';
import WelcomeIcon from '../assets/svg/WelcomeIcon';

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <Center flex={1} bg="#1162FF">
      <WelcomeIcon />
      <Text fontFamily="text" fontSize="19px" fontWeight="700" color="#FFF">
        모여런에 오신 것을 환영해요!
      </Text>
      <Button
        _text={{ fontFamily: 'text', fontSize: '23px', color: '#FFF' }}
        _pressed={{ bg: '#171717' }}
        w="300px"
        mt="120px"
        h="60px"
        bg="#111111"
        onPress={() => {
          navigation.navigate('Root');
        }}
      >
        시작하기
      </Button>
    </Center>
  );
};

export default Welcome;
