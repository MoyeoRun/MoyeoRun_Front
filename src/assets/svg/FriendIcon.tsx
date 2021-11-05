import { Factory } from 'native-base';
import React from 'react';
import { SvgXml } from 'react-native-svg';

const FriendIcon = ({
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
  <svg width="24" height="20" viewBox="0 0 24 20" fill="${fill}" xmlns="http://www.w3.org/2000/svg">
  <circle cx="17.7231" cy="5.83198" r="2.13832" stroke="${stroke}" stroke-width="${strokeWidth}"/>
  <path d="M17.1429 10C20.8389 10 22.6429 11.914 22.6429 13.0855V16.6H17.1429" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1.1942 12.6134C1.16021 12.7153 1.14288 12.8221 1.14288 12.9296V18C1.14288 18.5523 1.5906 19 2.14288 19H15.9457C16.498 19 16.9457 18.5523 16.9457 18V12.9296C16.9457 12.8478 16.9357 12.7664 16.9158 12.6871C16.4925 10.9937 14.2381 8.54932 9.18514 8.54932C4.13218 8.54932 1.73769 10.9829 1.1942 12.6134Z" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="9.18512" cy="3.94366" r="3.19366" stroke="${stroke}" stroke-width="${strokeWidth}"/>
  </svg>
  `;
  const FactoryView = Factory(SvgXml);
  return <FactoryView xml={source} {...props} />;
};

export default FriendIcon;
