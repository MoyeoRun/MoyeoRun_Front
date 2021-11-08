import { Box, ITextProps, ScrollView, Stack } from 'native-base';
import React from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { markedDatesType } from './CustomCalendar';
import DetailRecordCard, { detailRecordCardType } from './DetailedRecordCard';
import Filtering from './Filtering';
import Graph, { graphDataType } from './Graph';
import Summary, { recordType } from './Summary';

type recordProps = {
  summaryRecord: recordType;
  detailRecord: Array<detailRecordCardType>;
  graphData: graphDataType;
  filterDates: markedDatesType;
};

const RecordTab = ({ summaryRecord, detailRecord, graphData, filterDates }: recordProps) => {
  return (
    <Stack flex={1} alignItems="center" bg="#ffffff" pt={getStatusBarHeight()}>
      <ScrollView w="100%" mt="20px">
        {/*상태 */}
        <Box px="20px">
          <Box _text={RecordTitleStyle}>기록</Box>
          <Filtering filterDates={filterDates} />
          <Summary summaryRecord={summaryRecord} />
          <Graph graphData={graphData} />
        </Box>

        {/* 상세기록 */}
        <Box bg="#F4F4F4" height="100%" pt="26px" py="14px" px="12px">
          <Box mb="2px" _text={DetailTitleStyle}>
            상세기록
          </Box>

          {detailRecord.map((record, index) => (
            <DetailRecordCard
              key={index}
              recordData={record.recordData}
              imageUri={record.imageUri}
              date={record.date}
              title={record.title}
            />
          ))}
        </Box>
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

const DetailTitleStyle: ITextProps = {
  fontSize: 18,
  fontWeight: 500,
  lineHeight: 21.6,
};
