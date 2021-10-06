import { Factory } from 'native-base';
import React from 'react';
import { SvgXml } from 'react-native-svg';

const PrevArrowIcon = ({ color, ...props }: { color: string }) => {
  const source = `
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.2084 15.5H5.20837" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.5 22.7917L5.20837 15.5L12.5 8.20837" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `;
  const FactoryView = Factory(SvgXml);
  return <FactoryView xml={source} {...props} />;
};

export default PrevArrowIcon;
