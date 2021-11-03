import { Factory } from 'native-base';
import React from 'react';
import { SvgXml } from 'react-native-svg';

const CheckIcon = () => {
  const source = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20 6L9 17L3 11" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  
`;
  const FactoryView = Factory(SvgXml);
  return <FactoryView xml={source} />;
};

export default CheckIcon;
