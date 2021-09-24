import React from 'react';
import { HStack, Text, Pressable, Box } from 'native-base';
import { StyleSheet } from 'react-native';

// type textStyle = {
//   fontFamily: string;
//   fontSize: string;
//   fontWeight: number;
//   color: string;
// };

// const selectedText = {
//   fontFamily: 'text',
//   fontSize: '18px',
//   fontWeight: 500,
//   color: '#000000',
// };
// const unSelectedText = {
//   fontFamily: 'text',
//   fontSize: '18px',
//   fontWeight: 400,
//   color: '#828282',
// };

const Selected = (props: any) => {
  return (
    <Box px="4px" boxSizing="border-box" mb="22px">
      <Pressable>
        {props.isSelected ? (
          <Box>
            <Text fontFamily="text" fontSize="18px" fontWeight="500" color="#000000" mb="7px" textAlign="center">
              {props.children}
            </Text>
            <Box borderWidth="1" width="55px" />
          </Box>
        ) : (
          <Text fontFamily="text" fontSize="18px" fontWeight="400" color="#828282" textAlign="center">
            {props.children}
          </Text>
        )}
      </Pressable>
    </Box>
  );
};

const RunModeStatus = (props: any) => {
  return (
    <HStack>
      <Selected isSelected={true}>모여런</Selected>
      <Selected isSelected={false}>개인런</Selected>
    </HStack>
  );
};
export default RunModeStatus;
