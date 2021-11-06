import React from 'react';
import { RecordTab } from '../components/RecordTab';
import { detailRecordCard } from '../components/RecordTab/DetailedRecordCard';

const summaryRecord = { pace: 6.14, distance: 3.1, time: 6102 };
const detailRecordDummy: Array<detailRecordCard> = [
  {
    imageUri: 'https://source.unsplash.com/random/90x90',
    recordData: { pace: 6.14, distance: 3.1, time: 6102 },
    date: '2021. 8. 12. - 오후 7:30',
    title: '바람 부는 날 5km 함께 뛰어요',
  },
  {
    imageUri: 'https://source.unsplash.com/random/90x90',
    recordData: { pace: 6.14, distance: 3.1, time: 6102 },
    date: '2021. 8. 12. - 오후 7:30',
    title: '바람 부는 날 5km 함께 뛰어요',
  },
  {
    imageUri: 'https://source.unsplash.com/random/90x90',
    recordData: { pace: 6.14, distance: 3.1, time: 6102 },
    date: '2021. 8. 12. - 오후 7:30',
    title: '바람 부는 날 5km 함께 뛰어요',
  },
];
const graphDataDummy: any = [];

const RecordTabContainer = () => {
  return (
    <RecordTab
      summaryRecord={summaryRecord}
      detailRecord={detailRecordDummy}
      graphData={graphDataDummy}
    />
  );
};

export default RecordTabContainer;
