import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import RecordTab from '../../components/bottomTab/RecordTab';
import { RootState } from '../../modules';
import {
  getSingleRunHistoryByStartEndDays,
  getMultiRunHistoryByStartEndDays,
  getSingleRunRecordById,
  getMultiRunRecordById,
} from '../../modules/record';

const InitEndDay = new Date();
const InitStartDay = new Date(
  InitEndDay.getFullYear(),
  InitEndDay.getMonth(),
  InitEndDay.getDate() - 6,
);

const RecordTabContainer = () => {
  const { runHistory, runRecord } = useSelector((state: RootState) => state.record);
  const { user } = useSelector((state: RootState) => state.user);
  const [startDay, setStartDay] = useState<string>(InitStartDay.toISOString());
  const [endDay, setEndDay] = useState<string>(InitEndDay.toISOString());
  const dispatch = useDispatch();

  const getRunHistory = ({
    startDay,
    endDay,
    runType,
  }: {
    startDay: string;
    endDay: string;
    runType: string;
  }) => {
    switch (runType) {
      case 'single': {
        dispatch(getSingleRunHistoryByStartEndDays(startDay, endDay));
      }
      case 'multi': {
        dispatch(getMultiRunHistoryByStartEndDays(startDay, endDay));
      }
      default: {
        console.log('getRunHistory 타입 잘못 입력');
      }
    }
  };
  const getRunRecord = ({ id, runType }: { id: string; runType: string }) => {
    switch (runType) {
      case 'single': {
        dispatch(getSingleRunRecordById(id));
      }
      case 'multi': {
        dispatch(getMultiRunRecordById(id));
      }
      default: {
        console.log('getRunRecord 타입 잘못 입력');
      }
    }
  };

  useEffect(() => {
    getRunHistory({ startDay, endDay, runType: 'multi' });
  }, [dispatch]);

  return (
    <SafeAreaView mode="padding" style={{ flex: 1, backgroundColor: 'white' }}>
      <RecordTab
        user={user}
        runHistory={runHistory}
        runRecord={runRecord}
        getRunHistory={getRunHistory}
        getRunRecord={getRunRecord}
      />
    </SafeAreaView>
  );
};

export default RecordTabContainer;
