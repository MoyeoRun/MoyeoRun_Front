import React, { useState } from 'react';
import { RunningTab } from '../components/RunningTab';
const initMode: { multy: boolean; solo: boolean } = { multy: true, solo: false };

const RunningTabContainer = (props: any) => {
  const [runList, setRunList] = useState([
    {
      id: 1,
      title: '바람 부는 날 5Km 함께 뛰어요',
      waiting: 25,
      maximum: 30,
      startDate: null,
      image:
        'https://images.unsplash.com/photo-1604314923234-5144a466130f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80',
    },
    {
      id: 2,
      title: '도심 속 달리기',
      waiting: 12,
      maximum: 30,
      startDate: null,
      image:
        'https://images.unsplash.com/photo-1509339022327-1e1e25360a41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 3,
      title: '강변 러너스',
      waiting: 4,
      maximum: 30,
      startDate: null,
      image:
        'https://images.unsplash.com/photo-1586987177718-54e088c798b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 4,
      title: '중랑천 러닝',
      waiting: 4,
      maximum: 30,
      startDate: null,
      image:
        'https://images.unsplash.com/photo-1586987177718-54e088c798b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 5,
      title: '제목의길이가 길어지면 어떻게 나올까요???? 궁금궁금궁금궁금궁금궁금궁금궁금궁금궁금궁금궁금궁금궁금',
      waiting: 4,
      maximum: 30,
      startDate: null,
      image:
        'https://images.unsplash.com/photo-1586987177718-54e088c798b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    },
  ]);
  console.log(runList);
  return <RunningTab runList={runList} />;
};

export default RunningTabContainer;
