import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import RecordTab from '../../components/bottomTab/RecordTab';
import { RootState } from '../../modules';
import { getMultiRecordList, getSingleRecordList, initRecordList } from '../../modules/record';

const RecordTabContainer = () => {
  const { singleRecordList, multiRecordList } = useSelector((state: RootState) => state.record);
  const [endDay, setEndDay] = useState(new Date());
  const [mode, setMode] = useState<number>(0);
  const dispatch = useDispatch();

  const getRecordList = () => {
    const startDay = new Date(endDay.getFullYear(), endDay.getMonth(), endDay.getDate() - 6);
    switch (mode) {
      case 0: {
        dispatch(getMultiRecordList(startDay, endDay));
        return;
      }
      case 1: {
        dispatch(getSingleRecordList(startDay, endDay));
        return;
      }
    }
  };

  const onQueryChange = ({ type, value }: { type: 'mode' | 'endDay'; value: any }) => {
    if (type === 'mode') setMode(value);
    if (type === 'endDay') setEndDay(new Date(value));
  };

  useEffect(() => {
    getRecordList();
    return () => {
      dispatch(initRecordList());
    };
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
