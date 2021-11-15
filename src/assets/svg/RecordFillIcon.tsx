import { Factory } from 'native-base';
import React from 'react';
import { SvgXml } from 'react-native-svg';

const RecordFillIcon = ({ size = 22, color, ...props }: { size?: number; color: string }) => {
  const source = `
  <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="15" y="7" width="5" height="13" fill="${color}" stroke="${color}" stroke-width="1.5" stroke-linejoin="round"/>
  <rect x="1" y="10" width="5" height="10" fill="${color}" stroke="${color}" stroke-width="1.5" stroke-linejoin="round"/>
  <rect x="8" y="1" width="5" height="19" fill="${color}" stroke="${color}" stroke-width="1.5" stroke-linejoin="round"/>
  </svg>  
  `;
  const FactoryView = Factory(SvgXml);
  return <FactoryView xml={source} {...props} />;
};

export default RecordFillIcon;
