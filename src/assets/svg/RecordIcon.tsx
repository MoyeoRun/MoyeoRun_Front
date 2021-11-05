import { Factory } from 'native-base';
import React from 'react';
import { SvgXml } from 'react-native-svg';

const RecordIcon = ({
  stroke,
  fill,
  strokeWidth = 1.5,
  ...props
}: {
  stroke: string;
  fill?: string;
  strokeWidth?: number;
}) => {
  const source = `
  <svg width="21" height="21" viewBox="0 0 21 21" fill="${fill}" xmlns="http://www.w3.org/2000/svg">
  <rect x="15" y="7" width="5" height="13" stroke=${stroke} stroke-width="${strokeWidth}" stroke-linejoin="round"/>
  <rect x="1" y="10" width="5" height="10" stroke=${stroke} stroke-width="${strokeWidth}" stroke-linejoin="round"/>
  <rect x="8" y="1" width="5" height="19" stroke=${stroke} stroke-width="${strokeWidth}" stroke-linejoin="round"/>
  </svg>
  `;
  const FactoryView = Factory(SvgXml);
  return <FactoryView xml={source} {...props} />;
};

export default RecordIcon;
