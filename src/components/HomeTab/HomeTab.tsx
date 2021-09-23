import { Box, Center, HStack, Image, ScrollView, Text, VStack } from 'native-base';
import React from 'react';
import FavoritRunning from './FavoritRunning';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import LogoMini from '../../assets/svg/LogoMini';
import NewMission from './NewMission';

export type HomeTabProps = {
  runList: Array<object>;
  missionList: object;
};

const HomeTab = ({ runList, missionList }: HomeTabProps) => {
  return (
    <ScrollView flex={1} pt={getStatusBarHeight()} pl="20px" bg="#FFF">
      <Box>
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
          인서님, 즐거운 러닝 되세요.
        </Text>
      </Box>
      <VStack mt="22px" mb="100px">
        <FavoritRunning runList={runList} />
        <NewMission missionList={missionList} />
      </VStack>
    </ScrollView>
  );
};

export default HomeTab;
