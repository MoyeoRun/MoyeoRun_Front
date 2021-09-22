import { Box, Center, HStack, ScrollView, Text, VStack } from 'native-base';
import React from 'react';
import RightArrow from '../../assets/svg/RightArrow';
import SmallRunningIcon from '../../assets/svg/SmallRunningIcon';
import ImageBackground from '../common/ImageBackground';

const RunCard = ({ run }: any) => (
  <VStack w="326px" h="196px" mr="10px" bg="#999">
    <ImageBackground flex={1} justifyContent="space-between" px="10px" py="15px" source={{ uri: run.image }}>
      <Center w="70px" h="18px" borderRadius="4px" bg="#1162FF">
        <Text fontWeight="300" fontFamily="text" fontSize="10px" color="#FFFFFF">
          00:05:00 남음
        </Text>
      </Center>
      <Box>
        <Text fontWeight="700" fontFamily="text" fontSize="24px" color="#FFFFFF">
          {run.title}
        </Text>
        <HStack alignItems="center">
          <SmallRunningIcon mr="6px" />
          <Text fontWeight="300" fontFamily="text" fontSize="13px" color="#FFFFFF">
            {run.waiting}명 대기 중
          </Text>
        </HStack>
      </Box>
    </ImageBackground>
  </VStack>
);

const FavoritRunning = ({ runList }: any) => {
  return (
    <VStack>
      <HStack pr="30px" alignItems="center" justifyContent="space-between">
        <Text fontFamily="text" fontSize="18px" color="#333333">
          지금 인기있는 러닝
        </Text>
        <RightArrow />
      </HStack>
      <ScrollView horizontal={true} mt="18px">
        {runList.map((run: any) => (
          <RunCard key={run.id} run={run} />
        ))}
      </ScrollView>
    </VStack>
  );
};

export default FavoritRunning;
