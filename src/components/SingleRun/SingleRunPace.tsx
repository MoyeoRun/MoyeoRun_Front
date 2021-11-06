import { HStack, Box, Center, VStack } from 'native-base';
import React from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
// import Pagination from '../common/Pagination';
import OperationButton from './OperationButton';

type SinglePaceProps = {
  isRunning: boolean;
  runStatus: { time: string | null; distance: number; pace: number };
  onStartRunning: () => void;
  onStopRunning: () => void;
};

const Keyword = ({ children, ...props }: any) => {
  const textStyle = {
    fontFamily: 'text',
    fontSize: '16px',
    color: '#828282',
    fontWeight: 400,
    lineHeight: '19px',
    letterSpacing: '-1px',
  };
  return (
    <Box _text={textStyle} {...props}>
      {children}
    </Box>
  );
};
const TimeValue = ({ children, ...props }: any) => {
  const textStyle = {
    fontFamily: 'text',
    fontSize: '40px',
    color: '#333333',
    fontWeight: 500,
    lineHeight: '52.8px',
    letterSpacing: '-1px',
  };
  return (
    <Box _text={textStyle} {...props}>
      {children}
    </Box>
  );
};

const KMValue = ({ children, ...props }: { children?: any }) => {
  const textStyle = {
    fontFamily: 'text',
    fontSize: '80px',
    color: '#333333',
    fontWeight: 500,
    lineHeight: '103.6px',
    letterSpacing: '-1px',
  };
  return (
    <Box _text={textStyle} {...props}>
      {children}
    </Box>
  );
};

const SingleRunPace = ({
  isRunning,
  runStatus,
  onStartRunning,
  onStopRunning,
}: SinglePaceProps) => {
  return (
    <VStack alignItems="center" flex={1} px="30px" pt={getStatusBarHeight()}>
      <HStack mt="96px" w="100%" alignItems="center" justifyContent="space-around">
        <HStack alignItems="center">
          <Keyword>{runStatus.time}</Keyword>
          <TimeValue ml="9px">0:00</TimeValue>
        </HStack>
        <Box borderWidth="0.5px" borderColor="#828282" height="100%" />

        <HStack alignItems="center">
          <Keyword>{runStatus.pace}</Keyword>
          <TimeValue ml="9px">0'00"</TimeValue>
        </HStack>
      </HStack>

      <VStack alignItems="center" mt="46px">
        <KMValue>{runStatus.distance}</KMValue>
        <Keyword>킬로미터</Keyword>
      </VStack>

      <Box mt="130px">
        {isRunning ? (
          <OperationButton type="pause" size={88} onLongPress={onStopRunning} />
        ) : (
          <OperationButton type="start" size={88} onLongPress={onStartRunning} />
        )}
      </Box>
    </VStack>
  );
};
export default SingleRunPace;
