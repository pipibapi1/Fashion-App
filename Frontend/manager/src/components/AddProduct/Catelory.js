import React, { useState } from "react";

const valueCatelorys = [
  "female",
  "featured",
  "seller",
  "arrivals",
  "Men",
  "special",
  "mens",
];
const Catelory = ({ getValueCatelory }) => {
  const [valueCatelorys, setValueCatelorys] = useState([
    "female",
    "featured",
    "seller",
    "arrivals",
    "Men",
    "special",
    "mens",
  ]);
  const [res, setRes] = useState([]);

  const onChange = (e) => {
    const value = [e.target.name][0];
    const index = res.indexOf(value);
    if (index < 0 && e.target.checked) {
      res.push(value);
    } else if (index >= 0 && !e.target.checked) {
      res.splice(index, 1);
    }
    getValueCatelory(res.join(" "));
  };
  return (
    <div className="addProduct-content-text-name">
      <label
        htmlFor="brandProduct"
        className="addProduct-content-text-name-label"
      >
        <p className="addProduct-content-text-name-title">Catelory</p>
        {valueCatelorys.map((valueCatelory, index) => (
          <div className="addProduct-content-catelory">
            <input
              key={index}
              onChange={onChange}
              type="checkbox"
              name={valueCatelory}
            />
            {valueCatelory}
          </div>
        ))}
      </label>
    </div>
  );
};

export default Catelory;
