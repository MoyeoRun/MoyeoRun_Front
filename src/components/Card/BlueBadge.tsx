import React from 'react';
import { Box, Flex, HStack, Image, Text, VStack } from 'native-base';
import SmallRunningIcon from '../../assets/svg/SmallRunningIcon';

const BlueBadge = ({ children = '준비중' }: { children: string }, props: any) => {
  return (
    <Flex position="absolute" top="14px" left="12px">
      <HStack px="6px" h="24px" borderRadius="4px" bg="#1162FF">
        <Box mr="3px" my="auto">
          <SmallRunningIcon size={10} />
        </Box>
        <Box mx="auto">
          <Text fontWeight="400" fontFamily="text" fontSize="14px" color="#FFFFFF">
            {children}
          </Text>
        </Box>
      </HStack>
    </Flex>
  );
};

export default BlueBadge;
