import { Factory } from 'native-base';
import React from 'react';
import { SvgXml } from 'react-native-svg';

const PauseIcon = () => {
  const source = `


<svg width="25" height="31" viewBox="0 0 25 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.92163 1.22559H7.70595C8.53437 1.22559 9.20595 1.89716 9.20595 2.72559V28.0066C9.20595 28.8351 8.53437 29.5066 7.70595 29.5066H2.92163C2.0932 29.5066 1.42163 28.8351 1.42163 28.0066V2.72558C1.42163 1.89716 2.0932 1.22559 2.92163 1.22559ZM17.5622 1.22559H22.3465C23.1749 1.22559 23.8465 1.89716 23.8465 2.72559V28.0066C23.8465 28.8351 23.1749 29.5066 22.3465 29.5066H17.5622C16.7337 29.5066 16.0622 28.8351 16.0622 28.0066V2.72558C16.0622 1.89716 16.7337 1.22559 17.5622 1.22559Z" fill="white" stroke="white"/>
</svg>
  
`;
  const FactoryView = Factory(SvgXml);
  return <FactoryView xml={source} />;
};

export default PauseIcon;
