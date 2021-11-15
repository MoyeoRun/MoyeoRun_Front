import { Factory } from 'native-base';
import React from 'react';
import { SvgXml } from 'react-native-svg';

const HomeFillIcon = ({
  color,
  size = 22,
  ...props
}: {
  color: string;
  size?: number | string;
}) => {
  const source = `
  <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 8L10 1L19 8V21H13H7H1V8Z" fill="${color}"/>
<path d="M7 21H1V8L10 1L19 8V21H13M7 21H13M7 21V13H13V21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  `;
  const FactoryView = Factory(SvgXml);
  return <FactoryView xml={source} {...props} />;
};

export default HomeFillIcon;
