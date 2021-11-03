import React ,{useState}from 'react'
import SizeProduct from './SizeProduct'
import Products from "../../Products"
// import "./index.css"
// import "..//AddProduct/index.css"  
const AddProduct = () => {
  // const {name,brand,remain,sale,price,where,}
  const [img,setImg]=useState(Products[0].sizes[0].img)
  const handleClickSizeProduct=(index)=>{
    console.log(index);
    setImg(Products[0].sizes[index].img)
  }
    return (
        <>
        {/* Heading  */}
          <div className="listProducts-heading">
        <h3 className="listProducts-heading-title">Chi tiết sản phẩm</h3>
        <div className="listProducts-heading-info">
        <button className="button-hoangkui">
        <i className="fas fa-edit"></i>
          Sửa sản phẩm này
        </button>
          <h4 className="listProducts-heading-info-name">Nguyễn Trần Hoàng</h4>
          <img
            src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/148352211_1315852945481787_1410223456476714730_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=UTvzr_H01LEAX9fT_8T&_nc_ht=scontent.fdad2-1.fna&oh=ad71bf3dd4b49191be326bd411384505&oe=61A30021"
            alt=""
            className="listProducts-heading-info-img"
          />
        </div>
      </div>


      {/* Content */}
      <div className="addProduct-content">
        {/* Input text */}
          <div className="addProduct-content-input-text">
            <div className="addProduct-content-text-name">
                <label htmlFor="nameProduct" className="addProduct-content-text-name-label">
                    Tên sản phẩm
                </label>
                    <input type="text" className="addProduct-content-text-name-input" 
                    value={Products[0].name}
                    disabled
                    id="nameProduct"/>
                <label htmlFor="brandProduct" className="addProduct-content-text-name-label">
                    Tên thương hiệu
                </label>
                    <input type="text" className="addProduct-content-text-name-input"  
                    value={Products[0].brand}
                    disabled
                    id="brandProduct"/>
            </div>
            <div className="addProduct-content-text-des">
            <label htmlFor="desProduct" className="addProduct-content-text-des-label">
                    Mô tả
            </label>
                    <textarea 
                    value={Products[0].description}
                    disabled
                    className="addProduct-content-text-des-input" id="desProduct" />
            </div>
            <div className="addProduct-content-text-bot">
                <label htmlFor="manuProduct" className="addProduct-content-text-bot-where-label">
                    Nơi sản xuất
                </label>
                    <input type="text" className="addProduct-content-text-bot-input" 
                    value={Products[0].where}
                    disabled
                    id="manuProduct"/>
                <label htmlFor="numberProduct" className="addProduct-content-text-bot-number-label">
                    Giá
                </label>
                    <input type="number" className="addProduct-content-text-bot-input"
                    value={Products[0].price}
                    disabled
                    id="numberProduct" />
            </div>
            <div className="addProduct-content-text-bot-view">
                <label htmlFor="manuProduct" className="addProduct-content-text-bot-where-label-view">
                    Lượt truy cập
                </label>
                    <input type="text" className="addProduct-content-text-bot-input" 
                    value={Products[0].view}
                    disabled
                    id="manuProduct"/>
                
            </div>
          </div>

          {/* Input size */}
          <div className="addProduct-content-size">
            


          <div className="table-heading">
            <p className="table-heading-stt">STT</p>
            <p className="table-heading-size">Size</p>
            <p className="table-heading-color">Màu sắc</p>
            <p className="table-heading-sale">Số lượng đã bán</p>
            <p className="table-heading-remain">Số lượng còn</p>
          </div>
          <div className="wrraper-table">

          <table className="addProduct-content-size-table">

            <tbody>

          {/* <tr className="addProduct-content-size-row-heading-table">
            <th className="addProduct-content-size-row-heading">STT</th>
            <th className="addProduct-content-size-row-heading">Size</th>
            <th className="addProduct-content-size-row-heading">Màu sắc</th>
            <th className="addProduct-content-size-row-heading">Số lượng đã bán</th>
            <th className="addProduct-content-size-row-heading">
              Số lượng còn
            </th>
            <th className="addProduct-content-size-row-heading"> </th>
            
          </tr> */}
        
          {Products[0].sizes.map((size,index)=>{
            return <SizeProduct
            onClickSizeProduct={handleClickSizeProduct}
            
            key={index} index={index} size={size}/>
          })}
            </tbody>
          
          

          
        </table>
          </div>




        
        <div className="total-detail">
        <h4 className="total-detail-name">Tổng</h4>
        <p className="total-detail-sale">{Products[0].sale}</p>
        <p className="total-detail-remain">{Products[0].remain}</p>
        </div>
        <div className="addProduct-content-size-display">
          <p className="addProduct-content-size-display-text">

          Hình ảnh: 
          </p>
          <img src={img} alt="Chưa thêm size" className="addProduct-content-size-display-img-size" />

        </div>

        {/* <div className="listProducts-page">
          <i className="fas fa-step-backward"></i>
          1/10
          <i className="fas fa-step-forward"></i>
        </div> */}
          </div>

      </div>
        </>
    )
}

export default AddProduct
