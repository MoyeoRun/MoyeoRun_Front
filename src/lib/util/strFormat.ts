export const getPaceString = (pace: number) => {
  const first = Math.floor(pace).toString();
  const second = ((pace - Math.floor(pace)) * 100).toString();
  return first + "' " + second.substr(0, 2) + '"';
};

export const secondToTimeString = (secondNumber: number) => {
  const hour = parseInt(secondNumber / 60 / 60 + '', 10)
    .toString()
    .padStart(2, '0');
  const minute = parseInt(secondNumber / 60 + '', 10)
    .toString()
    .padStart(2, '0');
  const second = parseInt((secondNumber % 60) + '', 10)
    .toString()
    .padStart(2, '0');
  return hour + ':' + minute + ':' + second;
};
