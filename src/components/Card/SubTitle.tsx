import React from 'react';
import { Box, Center, HStack, Image, Text, VStack } from 'native-base';
import SmallRunningIcon from '../../assets/svg/SmallRunningIcon';

const SubTitle = ({ icons = false, children = '' }: { icons?: boolean; children: string }, props: any) => {
  return (
    // <HStack alignItems="center">
    //   {icons && <SmallRunningIcon mr="6px" />}
    <Text
      flex={1}
      flexWrap="nowrap"
      mt="5px"
      fontWeight="300"
      fontFamily="text"
      fontSize="15px"
      color="#FFFFFF"
      overflow="visible"
    >
      {children}
    </Text>
    // </HStack>
  );
};

export default SubTitle;
