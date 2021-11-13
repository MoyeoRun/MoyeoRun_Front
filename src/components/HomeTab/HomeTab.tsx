import { Button, HStack, Image, ScrollView, Text, VStack } from 'native-base';
import React, { useRef } from 'react';
import FavoritRunning from './FavoritRunning';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import LogoMini from '../../assets/svg/LogoMini';
import NewMission from './NewMission';
import LastRecord from './LastRecord';

export type HomeTabProps = {
  runList: Array<object>;
  missionList: Array<object>;
  lastRecordList: Array<object>;
  user: any;
  onLogout: () => void;
};

const HomeTab = ({ onLogout, runList, missionList, lastRecordList, user }: HomeTabProps) => {
  const scrollRef = useRef<any>();

  return (
    <>
      <HStack
        justifyContent="space-between"
        bg="#FFF"
        px="20px"
        alignItems="center"
        pr="20px"
        h="46px"
      >
        <Button
          variant="ghost"
          _pressed={{ bg: 'transparent' }}
          onPress={() => {
            scrollRef.current.scrollTo({ x: 0, y: 0, animated: true });
          }}
        >
          <LogoMini />
        </Button>
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
      <ScrollView flex={1} pl="20px" bg="#FFF" ref={scrollRef}>
        <Text pt="46px" fontFamily="text" fontSize="24px" fontWeight="700" color="#333333">
          {user.name}님, 즐거운 러닝 되세요.
        </Text>
        <Button onPress={onLogout}>로그아웃</Button>
        <VStack mt="22px" mb="100px">
          <FavoritRunning runList={runList} />
          <NewMission missionList={missionList} />
          <LastRecord lastRecordList={lastRecordList} />
        </VStack>
      </ScrollView>
    </>
  );
};

export default HomeTab;
