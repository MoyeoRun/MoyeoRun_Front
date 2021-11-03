import { Factory } from 'native-base';
import React from 'react';
import { SvgXml } from 'react-native-svg';

const BackIcon = ({ size = 12 }: { size?: number }) => {
  const source = `

  <svg width=${size} height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.25 1.5L1.75 10L10.25 18.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  
`;
  const FactoryView = Factory(SvgXml);
  return <FactoryView xml={source} />;
};

export default BackIcon;
