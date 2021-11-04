import React from 'react'

const TotalSize = (props) => {
    const {sale,remain}=props;
    return (
        <>
            <div className="total-detail">
        <h4 className="total-detail-name">Tổng</h4>
        <p className="total-detail-sale">{sale}</p>
        <p className="total-detail-remain">{remain}</p>
        </div>
        </>
    )
}

export default TotalSize
