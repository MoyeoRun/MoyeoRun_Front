import { Box, HStack, Flex, Text, VStack, Pressable, ScrollView } from 'native-base';
import React from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import PlusIcon from '../../assets/svg/PlusIcon';
import MultiRunMain from './MultiRunMain';
import RunModeStatus from './RunModeStatus';
import SingleRunMain from './SingleRunMain';

export type RunningTabProps = {
  runList: Array<object>;
};

const PlusButton = (props: any) => {
  return (
    <Box mt="12px">
      <Pressable onPress={() => console.log(props)}>
        <PlusIcon size={20}></PlusIcon>
      </Pressable>
    </Box>
  );
};

//  마찬가지로 runList : object로 바꿔주었다.
const RunningTab = ({ runList, mode, onModeChange }: { runList: object; mode: string; onModeChange: any }) => {
  const user = '상준';
  return (
    <Box flex={1} pt={getStatusBarHeight()} px="20px" bg="#FFF">
      <ScrollView showsVerticalScrollIndicator={false}>
        <HStack justifyContent="space-between" mt="24px">
          <Text fontFamily="text" fontSize="24px" fontWeight="700" color="#333333" lineHeight="31px" letterSpacing="-1">
            {user}님,{'\n'}함께 달려 볼까요?
          </Text>
          {mode == '모여런' && <PlusButton />}
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
