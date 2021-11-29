import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import MultiRecordDetail from '../../components/record/MultiRecordDetail';
import SingleRecordDetail from '../../components/record/SIngleRecordDetail';
import { RootState } from '../../modules';
import { getMultiRecord, reloadMultiRecord } from '../../modules/record';
import { getUserData } from '../../modules/user';

const MultiRecordDetailContainer = ({ route }: any) => {
  const { recordId } = route.params;
  const { user } = useSelector((state: RootState) => state.user);
  const { multiRoom, multiRecord } = useSelector((state: RootState) => state.record);
  const [displayUserId, setDisplayUserId] = useState<User['id']>(user!.id);
  const dispatch = useDispatch();

  const onChangeDisplayUser = ({ userId, runId }: { userId: User['id']; runId: string }) => {
    console.log({ userId, runId });
    setDisplayUserId(userId);
    dispatch(reloadMultiRecord(runId));
  };

  useEffect(() => {
    dispatch(getMultiRecord(recordId));
    if (!user) {
      dispatch(getUserData());
    }
  }, [dispatch]);

  if (!multiRecord || !multiRoom || !displayUserId) return null;

  return (
    <SafeAreaView mode="padding" style={{ flex: 1, backgroundColor: 'white' }}>
      <MultiRecordDetail
        multiRoom={multiRoom}
        multiRecord={multiRecord}
        displayUserId={displayUserId}
        onChangeDisplayUser={onChangeDisplayUser}
      />
    </SafeAreaView>
  );
};

export default MultiRecordDetailContainer;
