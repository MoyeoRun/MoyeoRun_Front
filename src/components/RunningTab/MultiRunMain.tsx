import React from 'react';
import { Box, HStack, Flex, Text, VStack, Pressable, ScrollView } from 'native-base';
import RunCard from '../Card/RunCard';

const MultiRunMain = ({ runList }: any) => {
  return runList.map((data: any, index: number) => {
    let { startDate, title, image, maximum, waiting } = data;
    return (
      <RunCard
        key={index}
        startDate={startDate}
        title={title}
        image={image}
        maximum={maximum}
        waiting={waiting}
      />
    );
  });
};
export default MultiRunMain;
