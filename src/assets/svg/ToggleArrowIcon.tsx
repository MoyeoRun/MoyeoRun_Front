import { Factory } from 'native-base';
import React from 'react';
import { SvgXml } from 'react-native-svg';

const ToggleArrowIcon = () => {
  const source = `

  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 1.5L6 6.5L11 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  
  
`;
  const FactoryView = Factory(SvgXml);
  return <FactoryView xml={source} />;
};

export default ToggleArrowIcon;
