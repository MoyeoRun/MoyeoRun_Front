import React from 'react';
import { Box, Pressable, Text } from 'native-base';
import PauseIcon from '../../assets/svg/PauseIcon';
import StopIcon from '../../assets/svg/StopIcon';
import PlayIcon from '../../assets/svg/PlayIcon';

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
  size,
  ml,
  onPress,
  onLongPress,
}: {
  type: string;
  color?: string;
  size?: string;
  ml?: string;
  onLongPress?: any;
  onPress?: any;
}) => {
  return (
    <Pressable
      zIndex={2}
      bg="#1162FF"
      w="100px"
      h="100px"
      borderRadius="100px"
      ml={ml}
      onLongPress={onLongPress}
      onPress={onPress}
    >
      <Box m="auto">
        <IconGenerator type={type} color={color} />
      </Box>
    </Pressable>
  );
};
export default OperationButton;
