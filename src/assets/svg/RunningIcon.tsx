import { Factory } from 'native-base';
import React from 'react';
import { SvgXml } from 'react-native-svg';

const RunningIcon = ({ color, width = 22, ...props }: { width?: number; color: string }) => {
  const source = `
  <svg width="${width}" height="${width}" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.8087 5.5422C16.0686 5.5422 17.0899 4.52539 17.0899 3.2711C17.0899 2.01681 16.0686 1 14.8087 1C13.5488 1 12.5275 2.01681 12.5275 3.2711C12.5275 4.52539 13.5488 5.5422 14.8087 5.5422Z" stroke=${color} stroke-width="1.5" stroke-miterlimit="10"/>
  <path d="M18.9721 7.53621C19.076 7.48668 19.1928 7.45872 19.3159 7.45872C19.7563 7.45872 20.1134 7.81427 20.1134 8.2527C20.1134 8.49398 20.005 8.71025 19.8346 8.85591L17.0983 10.9877C16.8923 11.1574 16.6278 11.2594 16.3392 11.2594C16.0845 11.2594 15.849 11.18 15.6554 11.0446L13.7979 9.44636L14.7205 7.23068L16.5564 9.01235L18.9721 7.53621Z" stroke=${color} stroke-width="1.5" stroke-miterlimit="10"/>
  <path d="M4.8904 16.0734L6.63963 12.5663L10.0944 12.0779L6.80985 17.5265L3.14116 19.5804C1.35616 20.3428 0.511661 18.5799 1.76745 17.7189L4.8904 16.0734Z" stroke=${color} stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M10.2901 20.5263C10.2547 20.5263 10.2182 20.5248 10.1793 20.5219C9.76307 20.49 9.26604 20.155 9.18969 19.6695C9.13304 19.3115 9.23648 18.9432 9.49707 18.5744L11.7738 15.3402L8.14391 14.0376C7.34936 13.8346 6.79618 13.125 6.79618 12.306C6.79618 12.0652 6.84347 11.8313 6.93706 11.6111L6.94002 11.6037L8.92172 7.55192L6.56614 7.17675L3.63916 8.62739L3.6165 8.63426C3.51157 8.66662 3.40222 8.6833 3.29139 8.6833C3.24311 8.6833 3.19434 8.68036 3.14607 8.67398C2.65643 8.61023 2.27024 8.22525 2.20768 7.73729C2.153 7.31309 2.353 6.89378 2.71653 6.66967L6.15827 4.62612L6.19128 4.61582C6.29718 4.58296 6.40752 4.5658 6.51885 4.5658H6.53264L12.0329 5.07582C13.3703 5.08367 14.456 6.19102 14.456 7.55143C14.456 8.07175 14.2777 8.58031 13.9402 9.02217L13.9363 9.02757L11.6054 11.8018L13.9511 13.0808L13.9797 13.0995C14.3979 13.3751 14.9185 13.7179 15.0668 14.4363C15.151 14.8434 15.0609 15.2337 14.7914 15.63L14.7855 15.6388L11.2812 20.0515L11.2605 20.0692C10.9276 20.359 10.6625 20.5263 10.2901 20.5263Z" fill="white" stroke=${color} stroke-width="1.5" stroke-linejoin="round"/>
  </svg>
  `;
  const FactoryView = Factory(SvgXml);
  return <FactoryView xml={source} {...props} />;
};

export default RunningIcon;
