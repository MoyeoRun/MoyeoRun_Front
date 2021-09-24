import { Factory } from 'native-base';
import React from 'react';
import { SvgXml } from 'react-native-svg';

const PlusIcon = ({ size = 20, width = 2, ...props }: { size?: number; width?: number }) => {
  const source = `
  <svg width="${size}" height="${size}" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 1V19" stroke="black" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1 10H19" stroke="black" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  
`;
  const FactoryView = Factory(SvgXml);
  return <FactoryView xml={source} {...props} />;
};

export default PlusIcon;
