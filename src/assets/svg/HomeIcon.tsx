import { Factory } from 'native-base';
import React from 'react';
import { SvgXml } from 'react-native-svg';

const HomeIcon = ({
  stroke,
  fill,
  strokeWidth = 1.5,
  size = 22,
  ...props
}: {
  size?: number | string;
  stroke: string;
  fill?: string;
  strokeWidth?: number;
}) => {
  const source = `
  <svg width="${size}" height="${size}" viewBox="0 0 20 22" fill="${fill}" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 21H1V8L10 1L19 8V21H13M7 21H13M7 21V13H13V21" stroke=${stroke} stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;
  const FactoryView = Factory(SvgXml);
  return <FactoryView xml={source} {...props} />;
};

export default HomeIcon;
