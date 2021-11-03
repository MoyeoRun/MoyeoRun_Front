import { Factory } from 'native-base';
import React from 'react';
import { SvgXml } from 'react-native-svg';

const PlayIcon = () => {
  const source = `

  <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.58929 0.876354C2.25624 0.0765243 0.560303 1.03675 0.560303 2.59134V21.4089C0.560303 22.9635 2.25625 23.9237 3.58929 23.1239L19.2706 13.7151C20.5653 12.9383 20.5653 11.062 19.2706 10.2851L3.58929 0.876354Z" fill="white"/>
  </svg>
  
`;
  const FactoryView = Factory(SvgXml);
  return <FactoryView xml={source} />;
};

export default PlayIcon;
