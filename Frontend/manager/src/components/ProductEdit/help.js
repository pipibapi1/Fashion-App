export const changeTextToSelect = (text) => {
  if (text === "") return null;
  const arrText = text.split(" ");
  let res = [];
  arrText.map((arr) => {
    res.push({
      value: arr,
      label: arr,
    });
  });
  return res;
};
export const changeSelectToText = (selectOptions) => {
  if (selectOptions === null) return "";
  const res = [];
  for (let x of selectOptions) {
    res.push(x.value);
  }
  return res.join(" ");
};
export const options = [
  { value: "female", label: "female" },
  { value: "featured", label: "featured" },
  { value: "men", label: "men" },
  { value: "seller", label: "seller" },
  { value: "arrivals", label: "arrivals" },
  // { value: "Men", label: "Men" },
  { value: "special", label: "special" },
];
export const optionValue = [
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
