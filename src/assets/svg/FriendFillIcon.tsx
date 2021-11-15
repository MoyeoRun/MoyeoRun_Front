import { Factory } from 'native-base';
import React from 'react';
import { SvgXml } from 'react-native-svg';

const FriendFillIcon = ({ size = 22, color, ...props }: { size?: number; color: string }) => {
  const source = `
  <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="17.5802" cy="5.83192" r="2.13832" fill="${color}" stroke="white" stroke-width="1.5"/>
  <path d="M22.5 13.3C22.5 11.4775 21.0225 10 19.2 10H14.8C12.9775 10 11.5 11.4775 11.5 13.3V13.3C11.5 15.1225 12.9775 16.6 14.8 16.6H19.2C21.0225 16.6 22.5 15.1225 22.5 13.3V13.3Z" fill="${color}"/>
  <path d="M17 10C20.696 10 22.5 11.914 22.5 13.0855V16.6H17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17 10C13.304 10 11.5 11.914 11.5 13.0855V16.6H17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1.05132 12.6134C1.01733 12.7153 1 12.8221 1 12.9296V18C1 18.5523 1.44772 19 2 19H15.8028C16.3551 19 16.8028 18.5523 16.8028 18V12.9296C16.8028 12.8478 16.7928 12.7664 16.773 12.6871C16.3496 10.9937 14.0952 8.54932 9.04225 8.54932C3.9893 8.54932 1.5948 10.9829 1.05132 12.6134Z" fill="${color}" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.04225 9.55005C4.30986 9.55005 2 12.0007 2 13.5007V18.0008H9.04225" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.00023 9.55005C13.7326 9.55005 16.0425 12.0007 16.0425 13.5007V18.0008H9.00023" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="9.04229" cy="3.94366" r="3.19366" fill="${color}" stroke="white" stroke-width="1.5"/>
  </svg>
  
  `;
  const FactoryView = Factory(SvgXml);
  return <FactoryView xml={source} {...props} />;
};

export default FriendFillIcon;
