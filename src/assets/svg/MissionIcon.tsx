import { Factory } from 'native-base';
import React from 'react';
import { SvgXml } from 'react-native-svg';

const MissionIcon = ({ size = 22, color, ...props }: { size?: number; color: string }) => {
  const source = `
  <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="1" y="3.57141" width="17.1429" height="15.4286" stroke="${color}" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M14.208 1V3.14286" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.52197 1V3.14286" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1 7H18" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.3333 16.7557L10.793 20.8235L13.0256 19.484L15.2582 20.8235L14.7179 16.7512" fill="white"/>
  <path d="M11.3333 16.7557L10.793 20.8235L13.0256 19.484L15.2582 20.8235L14.7179 16.7512" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.0256 17.2513C14.7518 17.2513 16.1512 15.8519 16.1512 14.1257C16.1512 12.3994 14.7518 11 13.0256 11C11.2993 11 9.8999 12.3994 9.8999 14.1257C9.8999 15.8519 11.2993 17.2513 13.0256 17.2513Z" fill="white" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;

  const FactoryView = Factory(SvgXml);
  return <FactoryView xml={source} {...props} />;
};

export default MissionIcon;
