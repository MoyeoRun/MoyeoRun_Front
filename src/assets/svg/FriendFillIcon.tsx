import { Factory } from 'native-base';
import React from 'react';
import { SvgXml } from 'react-native-svg';

const FriendFillIcon = ({ size = 22, color, ...props }: { size?: number; color: string }) => {
  const source = `
  <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7718 17.1168H13V13.6821C13 13.6821 14.167 11.5355 17.279 11.5355C17.4624 11.5355 17.6392 11.5429 17.8093 11.557C17.7243 11.237 17.4332 11.0011 17.0868 11C18.6685 11.0005 19.9005 11.4541 20.7542 12.0991C21.5788 12.722 22.1133 13.5825 22.1133 14.3994V17.4172C22.1133 17.8314 21.7775 18.1672 21.3633 18.1672H17.0844L17.0843 18.1672C17.4986 18.1672 17.8343 17.8314 17.8343 17.4172C17.8343 17.3104 17.812 17.2088 17.7718 17.1168Z" fill="${color}"/>
  <circle cx="17.723" cy="6.83192" r="2.88832" fill="${color}" stroke="white"/>
  <path d="M17.1428 11C20.8388 11 22.6428 12.914 22.6428 14.0855V17.6H17.1428" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17.1428 11C13.4468 11 11.6428 12.914 11.6428 14.0855V17.6H17.1428" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1.19414 13.6134C1.16015 13.7153 1.14282 13.8221 1.14282 13.9296V19C1.14282 19.5523 1.59054 20 2.14282 20H15.9456C16.4979 20 16.9456 19.5523 16.9456 19V13.9296C16.9456 13.8478 16.9356 13.7664 16.9158 13.6871C16.4924 11.9937 14.238 9.54932 9.18508 9.54932C4.13212 9.54932 1.73763 11.9829 1.19414 13.6134Z" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.18508 10.55C4.45268 10.55 2.14282 13.0007 2.14282 14.5007V19.0008H9.18508" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.1428 10.55C13.8752 10.55 16.1851 13.0007 16.1851 14.5007V19.0008H9.1428" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="9.18512" cy="4.94366" r="3.94366" fill="${color}" stroke="white"/>
  <path d="M9.14286 10C4.34286 10 2.38095 12.4 2 13.6V19H16V13.6C15.7143 12.4 13.9429 10 9.14286 10Z" fill="${color}"/>
  </svg>
  `;
  const FactoryView = Factory(SvgXml);
  return <FactoryView xml={source} {...props} />;
};

export default FriendFillIcon;
