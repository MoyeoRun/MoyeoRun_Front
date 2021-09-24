import React from 'react';
import { Box, HStack, Flex, Text, VStack, Pressable, ScrollView } from 'native-base';
import RunCard from '../Card/RunCard';

const MultyRunMain = ({ runList }: any) => {
  return runList.map((data: any) => {
    let { startDate, title, image, maximum, waiting } = data;
    return <RunCard startDate={startDate} title={title} image={image} maximum={maximum} waiting={waiting} />;
  });
};
export default MultyRunMain;
