import { View } from 'native-base';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
// import Pagination from '../common/Pagination';

const StyleView: StyleProp<ViewStyle> = {
  position: 'absolute',
  bottom: 50,
  zIndex: 1,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const SingleRunPagination = ({ arr, scrollW, scrollX }: any) => {
  return <View style={StyleView}>{/* <Pagination arr={arr} scrollW={scrollW} scrollX={scrollX} /> */}</View>;
};

export default SingleRunPagination;
