import { Factory } from 'native-base';
import React from 'react';
import { SvgXml } from 'react-native-svg';

const MissionFillIcon = ({ size = 22, color, ...props }: { size?: number; color: string }) => {
  const source = `
  <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="1" y="3.57129" width="17.1429" height="15.4286" fill="${color}" stroke="${color}" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M14.2078 1V3.14286" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.52206 1V3.14286" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1 7L18.15 7" stroke="white" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
  <path d="M11.3334 16.7557L10.7931 20.8235L13.0257 19.484L15.2583 20.8235L14.718 16.7512" fill="${color}"/>
  <path d="M11.3334 16.7557L10.7931 20.8235L13.0257 19.484L15.2583 20.8235L14.718 16.7512" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.0257 17.2513C14.752 17.2513 16.1514 15.8519 16.1514 14.1257C16.1514 12.3994 14.752 11 13.0257 11C11.2994 11 9.90002 12.3994 9.90002 14.1257C9.90002 15.8519 11.2994 17.2513 13.0257 17.2513Z" fill="${color}" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="1" y="3.57129" width="17.1429" height="15.4286" fill="${color}" stroke="${color}" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M14.2078 1V3.14286" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.52206 1V3.14286" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1 7L18.15 7" stroke="white" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
  <path d="M11.3334 16.7557L10.7931 20.8235L13.0257 19.484L15.2583 20.8235L14.718 16.7512" fill="${color}"/>
  <path d="M11.3334 16.7557L10.7931 20.8235L13.0257 19.484L15.2583 20.8235L14.718 16.7512" stroke="${color}" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.3403 16.7557L10.8 20.8235M15.2652 20.8235L14.725 16.7512" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.0257 17.2513C14.752 17.2513 16.1514 15.8519 16.1514 14.1257C16.1514 12.3994 14.752 11 13.0257 11C11.2994 11 9.90002 12.3994 9.90002 14.1257C9.90002 15.8519 11.2994 17.2513 13.0257 17.2513Z" fill="${color}" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  
  `;
  const FactoryView = Factory(SvgXml);
  return <FactoryView xml={source} {...props} />;
};

export default MissionFillIcon;
