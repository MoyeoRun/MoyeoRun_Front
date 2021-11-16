import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReadySingleRun from '../../components/singleRun/ReadySingleRun';
import { RootState } from '../../modules';

const ReadySingleRunContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  return <ReadySingleRun />;
};

export default ReadySingleRunContainer;
