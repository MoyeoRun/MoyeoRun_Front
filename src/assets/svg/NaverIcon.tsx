import { Factory } from "native-base";
import React from "react";
import { SvgXml } from "react-native-svg";

const source = `
<svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5622 0V7.35394L5.47684 0H0V14.3207H5.47684V6.96671L10.5622 14.3207H16.0391V0H10.5622Z" fill="white"/>
</svg>

`;

const NaverIcon = (props: any) => {
  const FactoryView = Factory(SvgXml);
  return <FactoryView xml={source} {...props} />;
};

export default NaverIcon;
