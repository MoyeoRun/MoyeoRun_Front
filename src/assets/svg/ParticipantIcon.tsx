import { Factory } from 'native-base';
import React from 'react';
import { SvgXml } from 'react-native-svg';

const source = `
<svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0941 12.4805V11.2049C15.0937 10.6397 14.9056 10.0905 14.5593 9.64378C14.2129 9.19702 13.728 8.87794 13.1807 8.73662" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6294 1.0829C11.1782 1.22341 11.6646 1.54257 12.0119 1.99006C12.3593 2.43755 12.5478 2.98792 12.5478 3.5544C12.5478 4.12089 12.3593 4.67126 12.0119 5.11875C11.6646 5.56624 11.1782 5.8854 10.6294 6.02591" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.4144 12.4805V11.2049C11.4144 10.5283 11.1456 9.87937 10.6672 9.40092C10.1887 8.92248 9.53979 8.65369 8.86316 8.65369H3.7607C3.08407 8.65369 2.43516 8.92248 1.95671 9.40092C1.47826 9.87937 1.20947 10.5283 1.20947 11.2049V12.4805" fill="white"/>
<path d="M11.4144 12.4805V11.2049C11.4144 10.5283 11.1456 9.87937 10.6672 9.40092C10.1887 8.92248 9.53979 8.65369 8.86316 8.65369H3.7607C3.08407 8.65369 2.43516 8.92248 1.95671 9.40092C1.47826 9.87937 1.20947 10.5283 1.20947 11.2049V12.4805H11.4144Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.31209 6.10246C7.7211 6.10246 8.86332 4.96023 8.86332 3.55123C8.86332 2.14222 7.7211 1 6.31209 1C4.90309 1 3.76086 2.14222 3.76086 3.55123C3.76086 4.96023 4.90309 6.10246 6.31209 6.10246Z" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;

const ParticiPantIcon = (props: any) => {
  const FactoryView = Factory(SvgXml);
  return <FactoryView xml={source} {...props} />;
};

export default ParticiPantIcon;
