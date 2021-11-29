import { Factory } from 'native-base';
import React from 'react';
import { SvgXml } from 'react-native-svg';

const LogoMini = ({
  size = 32,
  color = '#1133FF',
  ...props
}: {
  size?: number;
  color?: string;
}) => {
  const source = `
  <svg width="${size}" height="${(size / 32) * 38}" viewBox="0 0 ${size} ${
    (size / 32) * 38
  }" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M25.265 0.296179L17.7374 1.96174L17.7389 1.9573L6.55212 4.42528L0 38L11.0935 35.5527L11.0966 35.5364L17.3444 34.1551L20.1243 19.9942L20.4943 19.9128C21.6992 19.6463 22.1151 19.7958 21.4668 23.121C19.9851 30.7278 19.6136 33.0759 19.846 33.6029L26.84 32.0558C26.9333 30.7826 27.6734 27.0502 28.5082 23.0573C29.5281 18.1554 29.2024 16.4928 27.4425 15.7733C29.2024 14.805 30.5924 12.9071 31.2407 9.63071L31.704 7.31077C32.8157 1.71153 30.8233 -0.932634 25.265 0.296179ZM24.5234 8.31751L24.0143 11.129C23.5968 13.2461 23.2268 13.8575 21.8368 14.1655L21.2803 14.2884L22.8093 6.28479L23.2268 6.193C24.6167 5.88802 24.8935 6.35585 24.5234 8.31751Z" fill="url(#paint0_linear_1091_1837)"/>
  <defs>
  <linearGradient id="paint0_linear_1091_1837" x1="-4.68562" y1="15.3357" x2="30.066" y2="22.5408" gradientUnits="userSpaceOnUse">
  <stop stop-color="${color}" stop-opacity="0"/>
  <stop offset="0.7161" stop-color="${color}"/>
  </linearGradient>
  </defs>
  </svg>
  `;

  const FactoryView = Factory(SvgXml);
  return <FactoryView xml={source} {...props} />;
};

export default LogoMini;
