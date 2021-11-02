import { LinearGradient } from 'expo-linear-gradient';
import { Box, Button, FlatList, Text, VStack } from 'native-base';
import React, { useState } from 'react';
import ImageBackground from '../common/ImageBackground';

const MissionCard = ({ mission }: any) => (
  <Box flex={1} h="187px" mr="8px" mb="8px">
    <ImageBackground flex={1} source={{ uri: mission.image }}>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.2)']}
        style={{ flex: 1, justifyContent: 'flex-end', paddingHorizontal: 10, paddingVertical: 15 }}
      >
        <Text fontFamily="text" fontSize="18px" color="#FFF">
          {mission.title}
        </Text>
        <Text fontFamily="text" fontSize="15px" fontWeight="300" color="#FFF">
          {mission.description}
        </Text>
      </LinearGradient>
    </ImageBackground>
  </Box>
);

const NewMission = ({ missionList }: any) => {
  return (
    <VStack mt="40px">
      <Text fontFamily="text" fontSize="24px" fontWeight="700">
        새로운 미션
      </Text>
      <FlatList
        mt="18px"
        pr="10px"
        numColumns={2}
        data={missionList}
        renderItem={({ item }) => <MissionCard mission={item} />}
        keyExtractor={(item) => item.id + ''}
      />
      <Button
        _pressed={{ bg: '#cbcaca' }}
        bg="#E0E0E0"
        mr="18px"
        h="44px"
        _text={{ fontFamily: 'text', fontSize: '15px', color: '#828282' }}
      >
        전체보기 &gt;
      </Button>
    </VStack>
  );
};

export default NewMission;
