import React from 'react';
import { Box, Center, Flex, HStack, Image, Text, VStack } from 'native-base';

const Title = ({ children = '' }: { children: string }, props: any) => {
  return (
    // <Box position="absolute" bottom="15px" left="12px" width="240px" pr="24px" maxHeight="50px" overflow="hidden">
    <Text
      flex={1}
      maxWidth="200px"
      maxHeight="50px"
      justifyContent="flex-end"
      overflow="hidden"
      flexWrap="wrap"
      fontWeight="600"
      fontFamily="text"
      fontSize="24px"
      color="#FFFFFF"
      letterSpacing="-1"
      lineHeight="25"
    >
      {children}
    </Text>
    // </Box>
  );
};
export default Title;
