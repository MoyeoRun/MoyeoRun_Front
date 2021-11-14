import { setItemAsync } from 'expo-secure-store';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomeTab from '../components/BottomTab/HomeTab';
import actionMiddleware from '../middlewares/actionMiddleware';
import { RootState } from '../modules';
import { getAccessToken, initToken, logout } from '../modules/auth';
import { getUserData } from '../modules/user';

const HomeTabContainer = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const { accessToken, refreshToken } = useSelector((state: RootState) => state.auth);

  const [runList] = useState([
    {
      id: 1,
      title: '바람 부는 날 10Km 함께 뛰어요',
      waiting: 25,
      startDate: null,
      image:
        'https://images.unsplash.com/photo-1604314923234-5144a466130f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80',
    },
    {
      id: 2,
      title: '도심 속 달리기',
      waiting: 12,
      startDate: null,
      image:
        'https://images.unsplash.com/photo-1509339022327-1e1e25360a41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 3,
      title: '강변 러너스',
      waiting: 4,
      startDate: null,
      image:
        'https://images.unsplash.com/photo-1586987177718-54e088c798b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    },
  ]);

  const [missionList] = useState([
    {
      id: 1,
      title: '8월 주간 챌린지',
      description: '15Km 러닝',
      image:
        'https://images.unsplash.com/photo-1486739985386-d4fae04ca6f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
    },
    {
      id: 2,
      title: '새로운 장소 달리기',
      description: '성수동 7Km 코스',
      image:
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 3,
      title: '함께 뛰기',
      description: '5개의 러닝방 참여',
      image:
        'https://images.unsplash.com/photo-1560073743-0a45c01b68c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80',
    },
    {
      id: 4,
      title: '나만의 러닝 코스',
      description: '새로운 코스 등록',
      image:
        'https://images.unsplash.com/photo-1510078344547-e481316148ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
  ]);

  const [lastRecordList] = useState([
    {
      id: 1,
      title: '반포 한강공원 5Km',
      rate: 700,
      amount: 5000,
      image:
        'https://images.unsplash.com/photo-1535639019828-5afcac8f8a32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    },
    {
      id: 2,
      title: '서울숲 7Km',
      rate: 900,
      amount: 7000,
      image:
        'https://images.unsplash.com/photo-1560799260-b737af7dd0fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1380&q=80',
    },
  ]);

  const dispatch = useDispatch();

  const onLogout = async () => {
    dispatch(logout());
    setItemAsync('accessToken', '');
    setItemAsync('refreshToken', '');
  };

  useEffect(() => {
    actionMiddleware(dispatch, accessToken, refreshToken, getUserData, null);
  }, [dispatch]);

  if (!user) return null;
  return (
    <HomeTab
      onLogout={onLogout}
      runList={runList}
      missionList={missionList}
      lastRecordList={lastRecordList}
      user={user}
    />
  );
};

export default HomeTabContainer;
