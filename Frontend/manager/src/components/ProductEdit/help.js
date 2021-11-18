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
  { value: "Men", label: "Men" },
  { value: "seller", label: "seller" },
  { value: "arrivals", label: "arrivals" },
  { value: "Men", label: "Men" },
  { value: "special", label: "special" },
];
