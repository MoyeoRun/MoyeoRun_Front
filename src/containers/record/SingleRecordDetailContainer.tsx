import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleRecordDetail from '../../components/record/SIngleRecordDetail';
import { RootState } from '../../modules';
import { getSingleRecord, initRecord } from '../../modules/record';
import { SafeAreaView } from 'react-native-safe-area-context';

const SingleRecordDetailContainer = ({ route }: any) => {
  const { singleRecord } = useSelector((state: RootState) => state.record);
  const { recordId } = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleRecord(recordId));
    return () => {
      dispatch(initRecord());
    };
  }, [dispatch]);

  if (!singleRecord) return null;
  return (
    <SafeAreaView mode="padding" style={{ flex: 1, backgroundColor: 'white' }}>
      <SingleRecordDetail singleRecord={singleRecord} />
    </SafeAreaView>
  );
};

export default SingleRecordDetailContainer;
