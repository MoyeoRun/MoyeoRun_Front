import { Factory } from 'native-base';
import { ImageBackground as IB } from 'react-native';
import React from 'react';

const ImageBackground = (props: any) => {
  const FactoryView = Factory(IB);
  return <FactoryView {...props} />;
};

export default ImageBackground;
