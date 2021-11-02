import { LinearGradient } from 'expo-linear-gradient';
import { Box, Button, FlatList, HStack, Text, VStack } from 'native-base';
import React, { useState } from 'react';
import ImageBackground from '../common/ImageBackground';

const RecordCard = ({ record }: any) => (
  <Box flex={1} h="89px" mr="8px" mb="8px">
    <ImageBackground flex={1} source={{ uri: record.image }}>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.2)']}
        style={{ flex: 1, justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 13 }}
      >
        <Text fontFamily="text" fontSize="23px" color="#FFF">
          {record.title}
        </Text>
        <HStack justifyContent="space-between">
          <Text fontFamily="text" fontSize="16px" color="#FFF">
            순위
          </Text>
          <Text fontFamily="text" fontSize="16px" color="#FFF">
            {record.rate} / {record.amount}
          </Text>
        </HStack>
      </LinearGradient>
    </ImageBackground>
  </Box>
);

const LastRecord = ({ lastRecordList }: any) => {
  return (
    <VStack mt="40px">
      <Text fontFamily="text" fontSize="24px" fontWeight="700">
        지난 기록
      </Text>
      <FlatList
        mt="18px"
        pr="10px"
        data={lastRecordList}
        renderItem={({ item }) => <RecordCard record={item} />}
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

export default LastRecord;
