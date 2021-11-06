import { Box, HStack, VStack } from 'native-base';
import React from 'react';

export type summaryDataType = {
  pace: number;
  distance: number;
  time: number;
};

export type SummaryProps = {
  summaryData: summaryDataType;
};

const ItemWrap = ({ children, ...props }: any) => {
  return (
    <VStack {...props}>
      <Box display="flex" justifyContent="center" alignItems="center">
        {children}
      </Box>
    </VStack>
  );
};
const Value = ({ value }: { value: number }) => {
  return (
    <Box
      _text={{
        fontSize: 24,
        fontWeight: 400,
        lineHeight: 29,
      }}
    >
      {value}
    </Box>
  );
};
const Keyword = ({ keyword }: { keyword: string }) => {
  return (
    <Box
      _text={{
        fontSize: 24,
        fontWeight: 400,
        lineHeight: 29,
        color: '#828282',
      }}
    >
      {keyword}
    </Box>
  );
};

const Summary = ({ summaryData }: SummaryProps) => {
  return (
    <>
      <HStack mt="45">
        <ItemWrap>
          <Value value={summaryData.distance} />
          <Keyword keyword="거리" />
        </ItemWrap>
        <ItemWrap mx="55px">
          <Value value={summaryData.pace} />
          <Keyword keyword="평균 페이스" />
        </ItemWrap>
        <ItemWrap>
          <Value value={summaryData.time} />
          <Keyword keyword="시간" />
        </ItemWrap>
      </HStack>
    </>
  );
};

export default Summary;
