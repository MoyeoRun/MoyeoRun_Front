import { Factory } from 'native-base';
import React from 'react';
import { SvgXml } from 'react-native-svg';

const StopIcon = () => {
  const source = `

  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.705078 2.70496C0.705078 1.60039 1.60051 0.704956 2.70508 0.704956H18.1751C19.2797 0.704956 20.1751 1.60039 20.1751 2.70496V18.9862C20.1751 20.0908 19.2797 20.9862 18.1751 20.9862H2.70508C1.60051 20.9862 0.705078 20.0908 0.705078 18.9862V2.70496Z" fill="white"/>
  </svg>
  
`;
  const FactoryView = Factory(SvgXml);
  return <FactoryView xml={source} />;
};

export default StopIcon;
