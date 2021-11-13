import React, { useEffect, useRef, useState } from 'react';
import { HStack, Box, Text, VStack } from 'native-base';
import OperationButton from './OperationButton';
import { secondToTimeString, getDistanceString, getPaceString } from '../../lib/util/strFormat';
import { WebViewMessageEvent } from 'react-native-webview';
import CustomWebview from '../common/CustomWebview';

type SingleRunMapProps = {
  isRunning: boolean;
  section: number;
  runStatus: { time: number; distance: number; pace: number };
  runData: Array<
    Array<{
      latitude: number;
      longitude: number;
      currentTime: number;
      currentDistance: number;
      currentPace: number;
    }>
  >;
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
  section,
  runStatus,
  runData,
  onStartRunning,
  onStopRunning,
  onFinishRunning,
}: SingleRunMapProps) => {
  const webview = useRef<any>();

  const sendProps = () => {
    webview.current.postMessage(
      JSON.stringify({
        type: 'singleRunOnlyMap',
        value: { section, runData },
      }),
    );
  };

  useEffect(() => {
    sendProps();
  }, [section, runData]);

  const handleEvent = (event: WebViewMessageEvent) => {
    const data = JSON.parse(event.nativeEvent.data);
    switch (data.type) {
      case 'start': {
        onStartRunning();
        return;
      }
      case 'stop': {
        onStopRunning();
        return;
      }
      case 'finish': {
        onFinishRunning();
        return;
      }
    }
  };

  return (
    <VStack flex={1} bgColor="white">
      <Box flex={1} bgColor="gray">
        <CustomWebview
          scrollEnabled={false}
          parentRef={webview}
          path="singleRunOnlyMap"
          onMessage={handleEvent}
          onLoadEnd={sendProps}
          nestedScrollEnabled={true}
        />
      </Box>
      <Box w="100%" h="315px" px="35px">
        <HStack mt="20px" w="100%" alignItems="center">
          <VStack
            height="47px"
            alignItems="center"
            borderRightWidth="0.5px"
            borderColor="#828282"
            flex={1}
          >
            <Value>{getDistanceString(runStatus.distance)}</Value>
            <Keyword>킬로미터</Keyword>
          </VStack>
          <VStack
            height="47px"
            alignItems="center"
            borderRightWidth="0.5px"
            borderColor="#828282"
            flex={1}
          >
            <Value ml="9px">{secondToTimeString(runStatus.time / 1000)}</Value>
            <Keyword>시간</Keyword>
          </VStack>
          <VStack height="47px" alignItems="center" flex={1}>
            <Value ml="9px">{getPaceString(runStatus.pace)}</Value>
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
    </VStack>
  );
};
export default SingleRunMap;
