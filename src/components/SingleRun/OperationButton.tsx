import React, { useRef } from 'react';
import { Box, Pressable, Text } from 'native-base';
import PauseIcon from '../../assets/svg/PauseIcon';
import StopIcon from '../../assets/svg/StopIcon';
import PlayIcon from '../../assets/svg/PlayIcon';
import { Animated } from 'react-native';

type OperationButtonProps = {
  type: string;
  color?: string;
  size?: number;
  ml?: string;
  onLongPress?: any;
  onPress?: any;
  pressEffect?: boolean;
};

const IconGenerator = ({ type, color }: { type: string; color?: string }) => {
  switch (type) {
    case 'stop': {
      return <StopIcon />;
    }
    case 'pause': {
      return <PauseIcon />;
    }
    case 'start': {
      return <PlayIcon />;
    }
    default:
      return (
        <Text fontSize="30px" fontWeight="600" color="white">
          시작
        </Text>
      );
  }
};

const OperationButton = ({
  type,
  color,
  size = 100,
  ml,
  onPress,
  onLongPress,
  pressEffect = true,
}: OperationButtonProps) => {
  const buttonValue = useRef(new Animated.Value(1)).current;

  const onPressInEffect = () => {
    Animated.timing(buttonValue, {
      useNativeDriver: true,
      toValue: 1.1,
      duration: 300,
    }).start();
  };

  const onPressOutEffect = () => {
    Animated.spring(buttonValue, {
      useNativeDriver: true,
      toValue: 1,
    }).start();
  };

  return pressEffect ? (
    <Animated.View
      style={{
        transform: [
          { scale: buttonValue },
          { perspective: 1000 }, // without this line this Animation will not render on Android while working fine on iOS
        ],
      }}
    >
      <Pressable
        zIndex={2}
        bg="#1162FF"
        w={size}
        h={size}
        borderRadius="100px"
        ml={ml}
        onLongPress={onLongPress}
        delayLongPress={0}
        onPress={onPress}
        onPressIn={onPressInEffect}
        onPressOut={onPressOutEffect}
      >
        <Box m="auto">
          <IconGenerator type={type} color={color} />
        </Box>
      </Pressable>
    </Animated.View>
  ) : (
    <Pressable
      zIndex={2}
      bg="#1162FF"
      w={size}
      h={size}
      borderRadius="100px"
      ml={ml}
      onLongPress={onLongPress}
      onPress={onPress}
      onPressIn={onPressInEffect}
      onPressOut={onPressOutEffect}
    >
      <Box m="auto">
        <IconGenerator type={type} color={color} />
      </Box>
    </Pressable>
  );
};
export default OperationButton;
