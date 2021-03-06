import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import RecordAnalysis from '../../components/record/RecordAnalysis';
import { RootState } from '../../modules';
import { getSingleRecord } from '../../modules/record';

const RecordAnalysisContainer = ({ route }: any) => {
  const { singleRecord } = useSelector((state: RootState) => state.record);
  const { recordId } = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!singleRecord) dispatch(getSingleRecord(recordId));
  }, [dispatch]);

  if (!singleRecord) return null;
  return (
    <SafeAreaView mode="padding" style={{ flex: 1, backgroundColor: 'white' }}>
      <RecordAnalysis runData={singleRecord.runData} />
    </SafeAreaView>
  );
};

export default RecordAnalysisContainer;
