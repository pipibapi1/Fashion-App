import React from "react";

const SizeHeader = () => {
  return (
    <>
      <div className="table-heading">
        <p className="table-heading-stt">STT</p>
        <p className="table-heading-color">ID</p>
        <p className="table-heading-size table-heading-size-view">Size</p>
        <p className="table-heading-sale">Số lượng đã bán</p>
        <p className="table-heading-remain">Số lượng còn</p>
      </div>
    </>
  );
};

export default SizeHeader;
