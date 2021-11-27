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

export const optionValues = [
  {
    selected: false,
    value: "XXS",
  },
  {
    selected: false,
    value: "XS",
  },
  {
    selected: false,
    value: "S",
  },
  {
    selected: false,
    value: "M",
  },
  {
    selected: false,
    value: "L",
  },
  {
    selected: false,
    value: "XL",
  },
  {
    selected: false,
    value: "XXL",
  },
];
export const optionValuesInit = [
  {
    selected: false,
    value: "XXS",
  },
  {
    selected: false,
    value: "XS",
  },
  {
    selected: false,
    value: "S",
  },
  {
    selected: false,
    value: "M",
  },
  {
    selected: false,
    value: "L",
  },
  {
    selected: false,
    value: "XL",
  },
  {
    selected: false,
    value: "XXL",
  },
];
