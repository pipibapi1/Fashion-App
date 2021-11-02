import React from 'react'
// import "./index.css"
const SizeProduct = ({index,size}) => {
    return (
        <>
            <tr className="listProducts-content-row-size">
            <td style={{width:"8%"}}>{index+1}</td>
            <td style={{width:"8%"}}>{size.size}</td>
            <td style={{width:"15%"}}>{size.color}</td>
            <td style={{width:"45%"}}>{size.sale}</td>
            <td>{size.remain}</td>
            
          </tr>
        </>
    )
}

export default SizeProduct
