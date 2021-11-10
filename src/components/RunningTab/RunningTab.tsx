import { useNavigation } from '@react-navigation/native';
import { Box, HStack, Flex, Text, VStack, Pressable, ScrollView } from 'native-base';
import React, { useState } from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import MultiRunMain from './MultiRunMain';
import RunModeStatus from './RunModeStatus';
import SingleRunMain from './SingleRunMain';
import MakeRoomButton from './MakeRoomButton';

export type RunningTabProps = {
  runList: Array<object>;
};

//  마찬가지로 runList : object로 바꿔주었다.
const RunningTab = ({
  runList,
  mode,
  onModeChange,
}: {
  runList: object;
  mode: string;
  onModeChange: any;
}) => {
  const user = '상준';
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Box flex={1} px="20px" bg="#FFF">
      <ScrollView showsVerticalScrollIndicator={false}>
        <HStack justifyContent="space-between" mt="24px">
          <Text
            fontFamily="text"
            fontSize="24px"
            fontWeight="700"
            color="#333333"
            lineHeight="31px"
            letterSpacing="-1"
          >
            {user}님,{'\n'}함께 달려 볼까요?
          </Text>
          {/* 모여런일때 나타나는 방 만들기 버튼 , */}
          {mode == '모여런' && <MakeRoomButton></MakeRoomButton>}
        </HStack>
        {/* 모여런 , 개인런 탭*/}
        <VStack my="19px">
          {mode == '모여런' && (
            <>
              <RunModeStatus mode={mode} onModeChange={onModeChange} />
              <MultiRunMain runList={runList} />
            </>
          )}
          {mode == '개인런' && (
            <>
              <RunModeStatus mode={mode} onModeChange={onModeChange} />
              <SingleRunMain runList={runList} />
            </>
          )}
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default RunningTab;
