import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ReadySingleRun from '../../components/singleRun/ReadySingleRun';
import { setTarget } from '../../modules/singleRun';

const ReadySingleRunContainer = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const goSingleRun = ({ type, targetTime, targetDistance }: Partial<RunRecord>) => {
    dispatch(setTarget({ type, targetTime, targetDistance }));
    navigation.reset({ index: 0, routes: [{ name: 'SingleRun' }] });
  };

  return <ReadySingleRun goSingleRun={goSingleRun} />;
};

export default ReadySingleRunContainer;
