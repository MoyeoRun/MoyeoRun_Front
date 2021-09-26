import { Factory } from "native-base";
import React from "react";
import { SvgXml } from "react-native-svg";

const RightArrow = ({ color = "#111111", ...props }: { color?: string }) => {
  const source = `
  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 13L7 7L1 1" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;
  const FactoryView = Factory(SvgXml);
  return <FactoryView xml={source} {...props} />;
};

export default RightArrow;
