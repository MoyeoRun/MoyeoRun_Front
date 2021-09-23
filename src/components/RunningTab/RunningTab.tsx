import { Box, HStack, Flex, Text, VStack, Pressable, ScrollView } from 'native-base';
import React from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import PlusIcon from '../../assets/svg/PlusIcon';
import RunCard from '../Card/RunCard';
import RunModeStatus from './RunModeStatus';

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

const RunningTab = ({ runList }: RunningTabProps) => {
  const user = '상준';
  return (
    <Box flex={1} pt={getStatusBarHeight()} px="20px">
      <ScrollView>
        <HStack justifyContent="space-between" mt="24px">
          <Text fontFamily="text" fontSize="24px" fontWeight="700" color="#333333" lineHeight="31px" letterSpacing="-1">
            {user}님,{'\n'}함께 달려 볼까요?
          </Text>
          <PlusButton />
        </HStack>
        {/* 모여런 , 개인런 탭*/}
        <VStack my="19px">
          <RunModeStatus />
          {runList.map((data: any) => (
            <RunCard data={data} />
          ))}
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default RunningTab;
