import { Box } from 'native-base';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import RecordTab from '../../components/bottomTab/RecordTab';
import { RootState } from '../../modules';
import {
  getSingleRecordListByStartEndDays,
  getMultiRunRecordListByStartEndDays,
} from '../../modules/record';

const RecordTabContainer = () => {
  const { singleRecordList, multiRecordList } = useSelector((state: RootState) => state.record);
  const [endDay, setEndDay] = useState(new Date());
  const [mode, setMode] = useState<'single' | 'multi'>('multi');
  const dispatch = useDispatch();

  const getRecordList = () => {
    const startDay = new Date(endDay.getFullYear(), endDay.getMonth(), endDay.getDate() - 6);
    switch (mode) {
      case 'single': {
        dispatch(getSingleRecordListByStartEndDays(startDay, endDay));
        return;
      }
      case 'multi': {
        dispatch(getMultiRunRecordListByStartEndDays(startDay, endDay));
        return;
      }
    }
  };

  const onQueryChange = ({ key, value }: { key: 'mode' | 'endDay'; value: any }) => {
    if (key === 'mode') setMode(value);
    if (key === 'endDay') setEndDay(value);
  };

  useEffect(() => {
    getRecordList();
  }, [dispatch, endDay, mode]);

  return (
    <SafeAreaView mode="padding" style={{ flex: 1, backgroundColor: 'white' }}>
      <RecordTab
        endDay={endDay}
        mode={mode}
        singleRecordList={singleRecordList}
        multiRecordList={multiRecordList}
        onQueryChange={onQueryChange}
      />
    </SafeAreaView>
  );
};

export default RecordTabContainer;
