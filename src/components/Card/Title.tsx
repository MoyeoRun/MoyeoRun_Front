import React from 'react';
import { Box, Center, HStack, Image, Text, VStack } from 'native-base';

const Title = ({ children = '' }: { children: string }, props: any) => {
  return (
    <Box position="absolute" bottom="15px" left="12px" width="200px" maxHeight="80px" overflow="hidden">
      <Text fontWeight="600" fontFamily="text" fontSize="24px" color="#FFFFFF" letterSpacing="-1" lineHeight="24">
        {children}
      </Text>
    </Box>
  );
};
export default Title;
