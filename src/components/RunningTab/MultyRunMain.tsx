import React from 'react';
import { Box, HStack, Flex, Text, VStack, Pressable, ScrollView } from 'native-base';
import RunCard from '../Card/RunCard';

const MultyRunMain = ({ runList }: any) => {
  //   console.log(runList);
  return runList.map((data: any) => {
    let { startdate, title, image, maximum, waiting } = data;
    return <RunCard startdate={startdate} title={title} image={image} maximum={maximum} waiting={waiting} />;
  });
};
export default MultyRunMain;
