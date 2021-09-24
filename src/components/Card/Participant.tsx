import { Box, HStack, Text } from 'native-base';
import React from 'react';
import ParticiPantIcon from '../../assets/svg/ParticipantIcon';

const Participant = ({ maximum = 0, waiting = 0 }: { maximum: number; waiting: number }) => {
  const max = String(maximum);
  const cur = String(waiting);
  return (
    <Box position="absolute" bottom="15px" right="15px">
      <HStack alignItems="center">
        <Box mx="5px">
          <ParticiPantIcon />
        </Box>

        <Box _text={{ color: '#FFFFFF', letterSpacing: -1 }}>{`${cur} / ${max}`}</Box>
      </HStack>
    </Box>
  );
};

export default Participant;
