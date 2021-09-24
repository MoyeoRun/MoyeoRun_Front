import React from 'react';
import { Box, HStack, Flex, Text, VStack, Pressable, ScrollView } from 'native-base';
import RunCard from '../Card/RunCard';
import SoloFreeRunning from './SoloFreeRunning';
import SoloRunningGuide from './SoloRunningGuide';

const SoloRunMain = ({ runList }: { runList: object }) => {
  return (
    <>
      <SoloFreeRunning />
      <SoloRunningGuide />
    </>
  );
};
export default SoloRunMain;
