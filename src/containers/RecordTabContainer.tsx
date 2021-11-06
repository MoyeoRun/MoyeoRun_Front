import React from 'react';
import { RecordTab } from '../components/RecordTab';

const summaryData = { pace: 6.14, distance: 3.1, time: 6102 };

const RecordTabContainer = () => {
  return <RecordTab summaryData={summaryData} />;
};

export default RecordTabContainer;
