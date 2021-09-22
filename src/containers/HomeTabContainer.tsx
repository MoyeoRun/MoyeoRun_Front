import React, { useState } from 'react';
import { HomeTab } from '../components/HomeTab';

const HomeTabContainer = () => {
  const [runList, setRunList] = useState([
    {
      id: 1,
      title: '바람 부는 날 5Km 함께 뛰어요',
      waiting: 25,
      startDate: null,
      image:
        'https://images.unsplash.com/photo-1604314923234-5144a466130f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80',
    },
    {
      id: 2,
      title: '도심 속 달리기',
      waiting: 12,
      startDate: null,
      image:
        'https://images.unsplash.com/photo-1509339022327-1e1e25360a41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 3,
      title: '강변 러너스',
      waiting: 4,
      startDate: null,
      image:
        'https://images.unsplash.com/photo-1586987177718-54e088c798b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    },
  ]);

  return <HomeTab runList={runList} />;
};

export default HomeTabContainer;
