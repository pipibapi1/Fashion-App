//  convert 222 to PR000222
export const handleIndex = (index) => {
  let count = 6 - index.toString().length;
  let res = "";
  while (count--) {
    res += "0";
  }
  res += index.toString();
  return `PR${res}`;
};
export const handleIndexItem = (index) => {
  let count = 6 - index.toString().length;
  let res = "";
  while (count--) {
    res += "0";
  }
  res += index.toString();
  return `PI${res}`;
};
