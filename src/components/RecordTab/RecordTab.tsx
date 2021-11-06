import { Box, ITextProps, ScrollView, Stack } from 'native-base';
import React from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import DetailedRecord from './DetailedRecordCard';
import Filtering from './Filtering';
import Graph from './Graph';
import Summary, { summaryDataType } from './Summary';

type RecordProps = {
  summaryData: summaryDataType;
};

const onPressDummy = () => {
  console.log(123123);
};
const graphDataDummy: any = [];

const RecordTab = ({ summaryData }: RecordProps) => {
  return (
    <Stack flex={1} alignItems="center" bg="#ffffff" pt={getStatusBarHeight()}>
      <ScrollView w="100%" mt="20px" px="20px">
        {/*상태 */}
        <Box>
          <Box _text={RecordTitleStyle}>기록</Box>
          <Filtering onPress={onPressDummy} />
          <Summary summaryData={summaryData} />

          <Graph graphData={graphDataDummy} />
        </Box>

        {/* 상세기록 */}
        {/* <DetailedRecord /> */}
        {/* {details.map(detail => <Detail />)} */}
        {/* <Box>
          <RecordBlock value={record.distance.toString()} type="거리" />
          <RecordBlock value={record.pace.toString()} type="평균 페이스" />
          <RecordBlock value={record.time.toString()} type="시간" />
        </Box> */}
      </ScrollView>
    </Stack>
  );
};

export default RecordTab;

const RecordTitleStyle: ITextProps = {
  fontSize: 24,
  fontWeight: 600,
  lineHeight: 28.8,
};
