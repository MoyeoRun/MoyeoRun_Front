import { Button, HStack, Image, ScrollView, Text, VStack } from 'native-base';
import React from 'react';
import FavoritRunning from './FavoritRunning';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import LogoMini from '../../assets/svg/LogoMini';
import NewMission from './NewMission';
import LastRecord from './LastRecord';
import { useNavigation } from '@react-navigation/core';

export type HomeTabProps = {
  runList: Array<object>;
  missionList: Array<object>;
  lastRecordList: Array<object>;
  user: any;
};

const HomeTab = ({ runList, missionList, lastRecordList, user }: HomeTabProps) => {
  const navigation = useNavigation();
  return (
    <ScrollView flex={1} pt={getStatusBarHeight()} pl="20px" bg="#FFF">
      <HStack justifyContent="space-between" alignItems="center" mt="40px" pr="20px">
        <LogoMini />
        <Image
          alt="avatar"
          w="32px"
          h="32px"
          borderRadius={50}
          source={{
            uri: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
          }}
        />
      </HStack>
      <Text fontFamily="text" fontSize="24px" fontWeight="700" color="#333333" mt="24px">
        {user.name}님, 즐거운 러닝 되세요.
      </Text>
      <Button
        onPress={() => {
          navigation.navigate('SingleRun');
        }}
      >
        러닝 테스트
      </Button>
      <VStack mt="22px" mb="100px">
        <FavoritRunning runList={runList} />
        <NewMission missionList={missionList} />
        <LastRecord lastRecordList={lastRecordList} />
      </VStack>
    </ScrollView>
  );
};

export default HomeTab;
