import { Box, HStack, VStack } from 'native-base';
import React from 'react';

export type recordType = {
  pace: number;
  distance: number;
  time: number;
};

export type summaryProps = {
  summaryRecord: recordType;
};

const SummaryRecordItem = ({ value, keyword, ...props }: any) => {
  return (
    <VStack {...props}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box
          _text={{
            fontSize: 24,
            fontWeight: 400,
            lineHeight: 29,
          }}
        >
          {value}
        </Box>
        <Box
          _text={{
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 29,
            letterSpacing: -1,
            color: '#828282',
          }}
        >
          {keyword}
        </Box>
      </Box>
    </VStack>
  );
};

const Summary = ({ summaryRecord }: summaryProps) => {
  return (
    <>
      <HStack mt="45" px="22" justifyContent="center">
        <SummaryRecordItem value={summaryRecord.distance} keyword="거리" />
        <SummaryRecordItem mx="auto" value={summaryRecord.pace} keyword="평균 페이스" />
        <SummaryRecordItem value={summaryRecord.time} keyword="시간" />
      </HStack>
    </>
  );
};

export default Summary;
