import { Box } from 'native-base';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import RecordTab from '../../components/bottomTab/RecordTab';
import { RootState } from '../../modules';
import {
  getSingleRecordListByStartEndDays,
  getMultiRunRecordListByStartEndDays,
  getSpecificRunRecordById,
  getSpecificMultiRunRecordById,
} from '../../modules/record';

const InitEndDay = new Date();
const InitStartDay = new Date(
  InitEndDay.getFullYear(),
  InitEndDay.getMonth(),
  InitEndDay.getDate() - 6,
);

const RecordTabContainer = () => {
  const { singleRecordList, multiRecordList } = useSelector((state: RootState) => state.record);
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const getRecordList = ({
    startDay,
    endDay,
    runType,
  }: {
    startDay: string;
    endDay: string;
    runType: string;
  }) => {
    console.log('런히스토리 인수 확인 : ', startDay, endDay, runType);
    switch (runType) {
      case 'single': {
        console.log('single week: ', startDay, endDay, runType);
        dispatch(getSingleRecordListByStartEndDays(startDay, endDay));
        return;
      }
      case 'multi': {
        console.log('multi week: ', startDay, endDay, runType);
        dispatch(getMultiRunRecordListByStartEndDays(startDay, endDay));
        return;
      }
      default: {
        console.log('getRecordList 타입 잘못 입력');
      }
    }
  };

  useEffect(() => {
    const startDay = new Date();
    const endDay = new Date(startDay.getFullYear(), startDay.getMonth(), startDay.getDate() - 6);
    dispatch(getMultiRunRecordListByStartEndDays(startDay.toISOString(), endDay.toISOString()));
  }, []);

  if (singleRecordList === null && multiRecordList === null) return <Box></Box>;
  return (
    <SafeAreaView mode="padding" style={{ flex: 1, backgroundColor: 'white' }}>
      <RecordTab
        user={user}
        singleRecordList={singleRecordList}
        multiRecordList={multiRecordList}
        getRecordList={getRecordList}
      />
    </SafeAreaView>
  );
};

export default RecordTabContainer;
