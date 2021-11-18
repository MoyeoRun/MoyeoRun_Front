import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import RecordTab from '../../components/bottomTab/RecordTab';
import { RootState } from '../../modules';
import { getRunHistoryByWeek } from '../../modules/record';

const today = new Date();
today.setDate(today.getDate() - (today.getDate() % 7));

const RecordTabContainer = () => {
  const { runHistory } = useSelector((state: RootState) => state.record);
  const { user } = useSelector((state: RootState) => state.user);
  const [startWeekDay, setStartWeekDay] = useState<string>(today.toISOString());
  const dispatch = useDispatch();

  const chaneWeek = (day: string) => {
    setStartWeekDay(day);
  };

  useEffect(() => {
    dispatch(getRunHistoryByWeek(startWeekDay));
  }, [dispatch, startWeekDay]);

  return (
    <SafeAreaView mode="padding" style={{ flex: 1, backgroundColor: 'white' }}>
      <RecordTab
        user={user}
        startWeekDay={startWeekDay}
        runHistory={runHistory}
        chaneWeek={chaneWeek}
      />
    </SafeAreaView>
  );
};

export default RecordTabContainer;
