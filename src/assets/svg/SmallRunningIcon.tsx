import { Factory } from 'native-base';
import React from 'react';
import { SvgXml } from 'react-native-svg';

const SmallRunningIcon = (props: any) => {
  const source = `
  <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.78553 2.90996C9.59266 2.90996 10.247 2.25854 10.247 1.45498C10.247 0.651416 9.59266 0 8.78553 0C7.97839 0 7.32408 0.651416 7.32408 1.45498C7.32408 2.25854 7.97839 2.90996 8.78553 2.90996Z" fill="white" fill-opacity="0.8"/>
  <path d="M11.2688 4.03623C11.3354 4.0045 11.4102 3.98659 11.4891 3.98659C11.7712 3.98659 12 4.21438 12 4.49525C12 4.64983 11.9306 4.78839 11.8214 4.8817L10.0683 6.24745C9.93643 6.35615 9.76697 6.4215 9.58204 6.4215C9.41888 6.4215 9.26804 6.3706 9.14401 6.28389L7.95396 5.25997L8.54504 3.8405L9.72121 4.98192L11.2688 4.03623Z" fill="white" fill-opacity="0.8"/>
  <path d="M2.49236 9.49872L3.66325 7.18682L4.91558 8.43916L3.72206 10.4297L1.37172 11.7455C0.228164 12.2339 -0.312866 11.1045 0.491652 10.5529L2.49236 9.49872Z" fill="white" fill-opacity="0.8"/>
  <path d="M5.89073 12.5095C5.86801 12.5095 5.84466 12.5085 5.81973 12.5067C5.55306 12.4862 5.23464 12.2716 5.18573 11.9606C5.14944 11.7312 5.21571 11.4953 5.38265 11.259L6.84126 9.187L4.51576 8.35253C4.00673 8.22246 3.65233 7.76784 3.65233 7.24316C3.65233 7.08889 3.68263 6.93903 3.74259 6.79796L3.74448 6.79325L5.01405 4.19748L3.50496 3.95713L1.62979 4.88648L1.61527 4.89088C1.54805 4.91161 1.47799 4.92229 1.40699 4.92229C1.37606 4.92229 1.34482 4.92041 1.31389 4.91632C1.00021 4.87548 0.752794 4.62885 0.712716 4.31624C0.677686 4.04447 0.805811 3.77584 1.03871 3.63226L3.24366 2.32306L3.2648 2.31647C3.33265 2.29542 3.40334 2.28442 3.47466 2.28442H3.4835L7.00725 2.61117C7.86405 2.6162 8.55958 3.32562 8.55958 4.19716C8.55958 4.53051 8.44534 4.85632 8.22917 5.13939L8.22665 5.14285L6.73333 6.92018L8.23611 7.73956L8.25442 7.7515C8.52235 7.92807 8.85591 8.14769 8.9509 8.60796C9.00486 8.86874 8.94711 9.11882 8.77449 9.37268L8.77071 9.37834L6.52568 12.2054L6.51242 12.2167C6.29909 12.4023 6.12931 12.5095 5.89073 12.5095Z" fill="white" fill-opacity="0.8"/>
  </svg>
  `;
  const FactoryView = Factory(SvgXml);
  return <FactoryView xml={source} {...props} />;
};

export default SmallRunningIcon;
