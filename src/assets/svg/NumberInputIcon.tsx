import { Factory } from 'native-base';
import React from 'react';
import { SvgXml } from 'react-native-svg';

const ParticiPantIcon = ({ size = 22, ...props }: { size: number }) => {
  const source = `
<svg width="${
    size / 3
  }" height="${size}" viewBox="0 0 8 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.00005 16L3.91384 20.7113L6.82764 16" fill="#828282" stroke="#828282" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.82759 5.71127L3.91379 1L1 5.71127" fill="#828282" stroke="#828282" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;

  const FactoryView = Factory(SvgXml);
  return <FactoryView xml={source} {...props} />;
};

export default ParticiPantIcon;
