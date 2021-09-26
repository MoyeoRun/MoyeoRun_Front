import { Factory } from "native-base";
import React from "react";
import { SvgXml } from "react-native-svg";

const source = `
<svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.1218 0C4.52966 0 0 3.43024 0 7.65893C0 10.4415 1.96076 12.878 4.89665 14.2178L3.82365 18.2786L8.39876 15.2048C8.95797 15.2767 9.53117 15.3179 10.1184 15.3179C15.7105 15.3179 20.2402 11.8876 20.2402 7.65893C20.2437 3.42681 15.7105 0 10.1218 0Z" fill="#3C1E1E"/>
</svg>

`;

const KakaoIcon = (props: any) => {
  const FactoryView = Factory(SvgXml);
  return <FactoryView xml={source} {...props} />;
};

export default KakaoIcon;
