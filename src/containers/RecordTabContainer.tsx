import React from 'react';
import { RecordTab } from '../components/RecordTab';
import { detailRecordCardType } from '../components/RecordTab/DetailedRecordCard';
import { graphDataType } from '../components/RecordTab/Graph';
import { recordType } from '../components/RecordTab/Summary';
//summaryRecord- 거리, 평균페이스, 시간 보여주는 데이터
const summaryRecord: recordType = { pace: 6.14, distance: 3.1, time: 6102 };

//detailRecord : 상세기록의 러닝 기록 카드에 필요한 데이터. 배열형식
const detailRecord: Array<detailRecordCardType> = [
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
//graphData : 그래프 그리는데 필요한 데이터,
// labels -> x축, data : y축값, colors : 막대색깔, data와 colors는 인덱스로 1:1대응
const graphData: graphDataType = {
  labels: ['8', '9', '10', '11', '12', '13', '14'],
  data: [20, 45, 28, 80, 99, 43, 80],
  colors: [
    (opacity = 1) => '#1162FF',
    (opacity = 1) => '#1162FF',
    (opacity = 1) => '#1162FF',
    (opacity = 1) => '#1162FF',
    (opacity = 1) => '#1162FF',
    (opacity = 1) => '#1162FF',
    (opacity = 1) => '#1162FF',
  ],
};

const RecordTabContainer = () => {
  return (
    <RecordTab summaryRecord={summaryRecord} detailRecord={detailRecord} graphData={graphData} />
  );
};

export default RecordTabContainer;
