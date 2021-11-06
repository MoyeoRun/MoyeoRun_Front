import React, { useRef, useState } from 'react';
import { Box, HStack, ScrollView, VStack, Text, View, Modal } from 'native-base';
import { useWindowDimensions, Animated, Pressable } from 'react-native';
import OperationButton from './OperationButton';
import { StackActions, useNavigation } from '@react-navigation/native';
import Map from './Map';
import { LinearGradient } from 'expo-linear-gradient';
import BackIcon from '../../assets/svg/BackIcon';
import NumberPicker from './ValuePicker';
import ModeSelect from './ModeSelect';
import ValuePicker from './ValuePicker';

const ReadySingleRun = () => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const navigation = useNavigation();

  const [runMode, setRunMode] = useState({
    free: false,
    time: false,
    distance: true,
    type: '거리',
  });

  const ScreenBox = ({ children, ...props }: any) => {
    return (
      <Box w={windowWidth} h={windowHeight} {...props}>
        {children}
      </Box>
    );
  };
  const Gradient = () => {
    return (
      <LinearGradient
        colors={['rgba(255,255,255,1)', 'rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 0.8 }}
        style={{
          position: 'absolute',
          alignItems: 'center',
          width: windowWidth,
          height: windowHeight,
        }}
      ></LinearGradient>
    );
  };

  return (
    <ScreenBox>
      {/* 자유달리기 */}
      <Box position="absolute" top="65px" left="24px" zIndex={2}>
        <Pressable onPress={() => navigation.dispatch(StackActions.pop())}>
          <HStack alignItems="center">
            <BackIcon />
            <Box ml="15px" _text={{ fontSize: 24 }}>
              자유 달리기
            </Box>
          </HStack>
        </Pressable>
      </Box>

      <VStack flex={1} px="30px" pt="175px">
        <Box backgroundColor="white" opacity="0.5" position="absolute">
          <Map points={[]} />
          <Gradient />
        </Box>
        <VStack alignItems="center">
          {/* 밸류 체크 */}
          <ValuePicker runMode={runMode} />

          {/* 모드 선택 */}
          <Box mt="70px">
            <ModeSelect runMode={runMode} setRunMode={setRunMode} />
          </Box>
          {/* 시작버튼 */}
          <Box mt="80px">
            <OperationButton
              type="none"
              onPress={() => {
                navigation.navigate('SingleRun');
              }}
            />
          </Box>
        </VStack>
      </VStack>
    </ScreenBox>
  );
};
export default ReadySingleRun;
