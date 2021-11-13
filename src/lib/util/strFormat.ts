export const getDistanceString = (distanceNumber: number) => {
  const distance = Math.floor(distanceNumber * 10) / 10;
  return distance + 'Km';
};

export const getPaceString = (pace: number) => {
  const first = Math.floor(pace);
  const second = Math.floor((pace - first) * 100);
  return Math.floor(first + second / 60) + "' " + (second % 60) + '"';
};

export const secondToTimeString = (secondNumber: number) => {
  const hour = parseInt(secondNumber / 60 / 60 + '', 10)
    .toString()
    .padStart(2, '0');
  const minute = parseInt(((secondNumber / 60) % 60) + '', 10)
    .toString()
    .padStart(2, '0');
  const second = parseInt((secondNumber % 60) + '', 10)
    .toString()
    .padStart(2, '0');
  if (secondNumber > 60 * 60) return hour + ':' + minute;
  else return minute + ':' + second;
};
