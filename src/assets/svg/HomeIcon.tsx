import { Factory } from "native-base";
import React from "react";
import { SvgXml } from "react-native-svg";

const HomeIcon = ({ color, ...props }: { color: string }) => {
  const source = `
  <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 21H1V8L10 1L19 8V21H13M7 21H13M7 21V13H13V21" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;
  const FactoryView = Factory(SvgXml);
  return <FactoryView xml={source} {...props} />;
};

export default HomeIcon;
