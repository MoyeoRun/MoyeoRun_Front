import React from 'react';
import { Box, Center, HStack, Image, Text, VStack } from 'native-base';
import SmallRunningIcon from '../../assets/svg/SmallRunningIcon';

const SubTypo = ({ icons = false, children = '' }: { icons?: boolean; children: string }, props: any) => {
  return (
    <HStack alignItems="center">
      {icons && <SmallRunningIcon mr="6px" />}
      <Text fontWeight="300" fontFamily="text" fontSize="13px" color="#FFFFFF">
        {children}
      </Text>
    </HStack>
  );
};

export default SubTypo;
