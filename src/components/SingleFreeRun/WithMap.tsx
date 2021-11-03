import React, { useState } from 'react';
import { HStack, Box, Text, VStack } from 'native-base';
import OperationButton from './OperationButton';
import Map from './Map';
import MapView from 'react-native-maps';
import { Dimensions } from 'react-native';

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

const SingleRunWithMap = (props: any) => {
  const [runStatus, setRunStatus] = useState(true);
  const onPause = () => {
    setRunStatus(false);
  };
  const onStart = () => {
    setRunStatus(true);
  };
  const onStop = () => {};

  return (
    <Box display="flex" flex={1} justifyContent="center" alignItems="center">
      <Map />
      <Box w="100%" h="315px" px="35px">
        <HStack mt="20px" w="100%" alignItems="center" justifyContent="space-around">
          <VStack alignItems="center">
            <Value>1.50</Value>
            <Keyword>킬로미터</Keyword>
          </VStack>
          <VStack alignItems="center">
            <Value ml="9px">0:00</Value>
            <Keyword>시간</Keyword>
          </VStack>
          <VStack alignItems="center">
            <Value ml="9px">0'00"</Value>
            <Keyword>페이스</Keyword>
          </VStack>
        </HStack>
        <HStack alignItems="center" justifyContent="center" mt="30px">
          {runStatus ? (
            <OperationButton type="pause" size="small" onLongPress={onPause} />
          ) : (
            <>
              <OperationButton type="start" size="small" onLongPress={onStart} />
              <OperationButton type="stop" size="small" ml="24px" />
            </>
          )}
        </HStack>
      </Box>
    </Box>
  );
};
export default SingleRunWithMap;
