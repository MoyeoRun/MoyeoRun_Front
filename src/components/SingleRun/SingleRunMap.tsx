import React, { useState } from 'react';
import { HStack, Box, Text, VStack } from 'native-base';
import OperationButton from './OperationButton';
import Map from './Map';
import MapView from 'react-native-maps';
import { Dimensions } from 'react-native';

type SingleMapProps = {
  isRunning: boolean;
  buffer: Array<{ latitude: number; longitude: number; time: string }>;
  runStatus: { time: string | null; distance: number; pace: number };
  runData: Array<{ latitude: number; longitude: number }>;
  onStartRunning: () => void;
  onStopRunning: () => void;
  onFinishRunning: () => void;
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
const Value = ({ children, ...props }: any) => {
  const textStyle = {
    fontFamily: 'text',
    fontSize: '30px',
    color: '#333333',
    fontWeight: 500,
    lineHeight: '35.8px',
    letterSpacing: '-1px',
  };
  return (
    <Box _text={textStyle} {...props}>
      {children}
    </Box>
  );
};

const SingleRunMap = ({
  isRunning,
  buffer,
  runStatus,
  runData,
  onStartRunning,
  onStopRunning,
  onFinishRunning,
}: SingleMapProps) => {
  return (
    <Box display="flex" flex={1} justifyContent="center" alignItems="center">
      <Map points={buffer} />
      <Box w="100%" h="315px" px="35px">
        <HStack mt="20px" w="100%" alignItems="center" justifyContent="space-around">
          <VStack alignItems="center">
            <Value>{runStatus.distance}</Value>
            <Keyword>킬로미터</Keyword>
          </VStack>
          <Box borderWidth="0.5px" borderColor="#828282" height="100%" />
          <VStack alignItems="center">
            <Value ml="9px">0</Value>
            <Keyword>시간</Keyword>
          </VStack>
          <Box borderWidth="0.5px" borderColor="#828282" height="100%" />
          <VStack alignItems="center">
            <Value ml="9px">{runStatus.pace}</Value>
            <Keyword>페이스</Keyword>
          </VStack>
        </HStack>
        <HStack alignItems="center" justifyContent="center" mt="30px">
          {isRunning ? (
            <OperationButton type="pause" size={88} onLongPress={onStopRunning} />
          ) : (
            <>
              <OperationButton type="start" size={88} onLongPress={onStartRunning} />
              <OperationButton type="stop" size={88} onLongPress={onFinishRunning} ml="24px" />
            </>
          )}
        </HStack>
      </Box>
    </Box>
  );
};
export default SingleRunMap;
