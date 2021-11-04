import { Factory } from 'native-base';
import React from 'react';
import { SvgXml } from 'react-native-svg';

const MissionIcon = ({
  stroke,
  fill,
  strokeWidth = 1.5,
  ...props
}: {
  stroke: string | number;
  strokeWidth?: number;
  fill?: string;
}) => {
  const source = `
  <svg width="19" height="22" viewBox="0 0 19 22" fill="${fill}" xmlns="http://www.w3.org/2000/svg">
  <rect x="1" y="3.57141" width="17.1429" height="15.4286" stroke=${stroke} stroke-width="${strokeWidth}" stroke-linejoin="round"/>
  <path d="M14.2078 1V3.14286" stroke=${stroke} stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.52206 1V3.14286" stroke=${stroke} stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1 7H18" stroke=${stroke} stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.3333 16.7557L10.793 20.8236L13.0257 19.484L15.2583 20.8236L14.718 16.7513" fill="${fill}"/>
  <path d="M11.3333 16.7557L10.793 20.8236L13.0257 19.484L15.2583 20.8236L14.718 16.7513" stroke=${stroke} stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.0257 17.2513C14.7519 17.2513 16.1513 15.8519 16.1513 14.1257C16.1513 12.3994 14.7519 11 13.0257 11C11.2994 11 9.89999 12.3994 9.89999 14.1257C9.89999 15.8519 11.2994 17.2513 13.0257 17.2513Z" fill="${fill}" stroke=${stroke} stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;

  const FactoryView = Factory(SvgXml);
  return <FactoryView xml={source} {...props} />;
};

export default MissionIcon;
