import { Factory } from "native-base";
import React from "react";
import { SvgXml } from "react-native-svg";

const RecordIcon = ({ color, ...props }: { color: string }) => {
  const source = `
  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="15" y="7" width="5" height="13" stroke=${color} stroke-width="1.5" stroke-linejoin="round"/>
  <rect x="1" y="10" width="5" height="10" stroke=${color} stroke-width="1.5" stroke-linejoin="round"/>
  <rect x="8" y="1" width="5" height="19" stroke=${color} stroke-width="1.5" stroke-linejoin="round"/>
  </svg>
  `;
  const FactoryView = Factory(SvgXml);
  return <FactoryView xml={source} {...props} />;
};

export default RecordIcon;
