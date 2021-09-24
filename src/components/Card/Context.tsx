import { Box, HStack, Text } from 'native-base';
import React from 'react';
import ParticiPantIcon from '../../assets/svg/ParticipantIcon';

const Context = ({ context }: { context: string }) => {
  return (
    <Box position="absolute" bottom="15px" right="12px">
      <Box _text={{ color: '#FFFFFF', letterSpacing: -1 }}>{context}</Box>
    </Box>
  );
};

export default Context;
