import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import RunningTab from '../../components/bottomTab/RunningTab';
import { RootState } from '../../modules';
import { getRoomList } from '../../modules/room';

const RunningTabContainer = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const { openRoomList, currentRoom } = useSelector((state: RootState) => state.room);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [singleRunGuideList, setSingleRunGuideList] = useState([
    {
      title: '5분 달리기',
      description: '회복 러닝',
      image:
        'https://images.unsplash.com/photo-1562771379-eafdca7a02f8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyZXRjaGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: '처음부터 무리말고',
      description: '걷고 뛰는 러닝',
      image:
        'https://images.unsplash.com/photo-1603455778956-d71832eafa4e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJ1bm5pbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: '장거리 도전',
      description: '40분 러닝',
      image:
        'https://media.istockphoto.com/photos/african-woman-running-on-racetrack-picture-id489304976?b=1&k=20&m=489304976&s=170667a&w=0&h=GGtU-aC6uEVg7djn1-9dKxyBjjVYYxtX_UQGJKG0GY8=',
    },
    {
      title: '인터벌 훈련',
      description: '인터벌 러닝',
      image:
        'https://images.unsplash.com/photo-1474546652694-a33dd8161d66?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHJ1bm5pbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
  ]);

  const handleRefresh = async () => {
    await dispatch(getRoomList());
  };

  useEffect(() => {
    dispatch(getRoomList());
  }, []);

  return (
    <SafeAreaView mode="padding" style={{ flex: 1, backgroundColor: 'white' }}>
      <RunningTab
        user={user}
        openRoomList={openRoomList}
        currentRoom={currentRoom}
        handleRefresh={handleRefresh}
        singleRunGuideList={singleRunGuideList}
      />
    </SafeAreaView>
  );
};

export default RunningTabContainer;
