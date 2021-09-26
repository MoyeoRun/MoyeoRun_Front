import React from 'react';
import { Box, HStack, Flex, Text, VStack, Pressable, ScrollView } from 'native-base';
import RunCard from '../Card/RunCard';
import SingleFreeRunning from './SingleFreeRunning';
import SingleRunningGuide from './SingleRunningGuide';

const SingleRunMain = ({ runList }: { runList: object }) => {
  return (
    <>
      <SingleFreeRunning />
      <SingleRunningGuide />
    </>
  );
};
export default SingleRunMain;
