import { Factory } from "native-base";
import React from "react";
import { SvgXml } from "react-native-svg";

const source = `
<svg width="238" height="258" viewBox="0 0 238 258" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M62.4537 92.0962C64.3449 82.1304 67.5312 65.2281 69.5198 55.2451L68.7232 55.4287C64.0469 74.0637 55.8805 106.136 54.786 111.202L43.5365 113.772C44.929 103.387 48.6139 73.4096 50.3045 59.3129L49.5079 59.4965C47.9148 68.3206 45.4276 83.1344 43.0379 95.9976L39.5536 114.678L25.3184 117.932L39.353 43.3917L60.4537 38.5666C59.8577 45.3424 58.1671 61.9005 56.9694 70.7417L57.468 70.627C60.3563 59.8981 62.0468 52.7666 66.3277 37.2183L88.225 32.2096L74.1903 106.749L59.0611 110.209L62.4537 92.0962Z" fill="#1162FF"/>
<path d="M125.956 44.3671L119.389 78.8544C116.501 94.1903 110.329 99.5605 98.8843 102.182C86.8383 104.936 81.0674 99.8302 83.9557 84.8212L90.9243 48.3144C93.7095 33.7529 100.38 28.3713 110.334 26.0935C123.567 23.0642 128.839 29.1401 125.956 44.3671ZM106.443 44.1146L98.7812 84.9589C98.2826 87.753 98.6838 89.371 100.374 88.9866C102.265 88.5563 102.861 86.9211 103.457 83.8918L111.12 42.9385C111.716 39.5878 111.217 38.7387 109.429 39.1461C107.939 39.4903 107.045 40.7697 106.443 44.1146Z" fill="#1162FF"/>
<path d="M127.744 94.5116L131.429 74.603C131.727 73.0367 132.025 70.2885 132.025 68.682L131.131 22.4044L146.96 18.7841C145.768 27.6254 144.77 37.815 143.177 48.7791L144.175 48.5496C146.266 40.1444 149.453 28.0615 151.94 17.6424L167.963 13.9762L148.157 66.8116C147.561 68.4468 147.361 68.923 147.063 70.4893L143.08 91.0004L127.744 94.5116Z" fill="#1162FF"/>
<path d="M191.545 49.502L178.605 52.4625L175.419 70.1106L190.748 66.6051L186.766 81.0116L157.304 87.753L171.338 13.2132L200.405 6.56355L197.717 20.6717L184.181 23.7699L181.293 38.2453L194.233 35.2848L191.545 49.502Z" fill="#1162FF"/>
<path d="M236.732 19.0308L230.165 53.5239C227.276 68.8599 221.104 74.23 209.66 76.852C197.614 79.606 191.843 74.4997 194.731 59.4907L201.7 22.9839C204.485 8.42246 211.156 3.04081 221.11 0.763078C234.342 -2.27199 239.62 3.80388 236.732 19.0308ZM217.225 18.7784L209.563 59.6227C209.064 62.4168 209.465 64.0347 211.156 63.6503C213.047 63.22 213.643 61.5791 214.239 58.5556L221.901 17.6022C222.497 14.2516 221.998 13.4025 220.21 13.8098C218.72 14.1541 217.821 15.4278 217.225 18.7784Z" fill="#1162FF"/>
<path d="M81.0012 132.978L56.867 138.478L56.8719 138.464L21.0065 146.615L0 257.499L35.5664 249.417L35.5762 249.363L55.6071 244.801L64.5195 198.033L65.7059 197.764C69.5689 196.884 70.9024 197.378 68.8238 208.36C64.0734 233.482 62.8822 241.237 63.6273 242.978L86.0506 237.868C86.3496 233.663 88.7223 221.336 91.399 208.149C94.6689 191.96 93.6247 186.469 87.9821 184.093C93.6247 180.895 98.0809 174.627 100.159 163.806L101.645 156.144C105.209 137.652 98.8211 128.919 81.0012 132.978ZM78.6235 159.469L76.9911 168.754C75.6527 175.746 74.4664 177.766 70.0101 178.783L68.2257 179.189L73.128 152.756L74.4664 152.453C78.9226 151.445 79.8099 152.99 78.6235 159.469Z" fill="url(#paint0_linear)"/>
<path d="M134.731 120.864L118.602 207.199C117.871 211.188 118.457 213.124 120.655 212.615C123.293 212.004 124.029 209.927 124.91 205.747L141.038 119.412L164.5 114L148.957 197.016C145.143 217.475 138.84 227.208 118.602 231.877C98.8047 236.443 92.9429 226.817 96.4619 207.859L111.709 126.183L134.731 120.864Z" fill="#1162FF"/>
<path d="M151.5 223L172.283 112.208L197.641 106.39C196.167 136.018 193.661 176.236 193.364 180.758L194.395 180.523C196.016 163.436 201.325 119.234 203.242 108.928L203.977 104.938L225.5 100L204.717 210.782L178.624 216.771C180.245 188.542 182.751 146.735 183.047 143.166L181.87 143.435C180.249 155.589 174.794 202.847 172.434 215.647L171.991 218.297L151.5 223Z" fill="#1162FF"/>
<defs>
<linearGradient id="paint0_linear" x1="-15.0224" y1="182.648" x2="96.6586" y2="205.125" gradientUnits="userSpaceOnUse">
<stop stop-color="#1162FF" stop-opacity="0"/>
<stop offset="0.7161" stop-color="#1162FF"/>
</linearGradient>
</defs>
</svg>

`;

const LogoWhite = (props: any) => {
  const FactoryView = Factory(SvgXml);
  return <FactoryView xml={source} {...props} />;
};

export default LogoWhite;
