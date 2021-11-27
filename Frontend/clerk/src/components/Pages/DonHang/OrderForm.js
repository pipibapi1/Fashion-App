import React from 'react'
import styles from './OrderForm.module.scss'
import phone from './phone.png'
import address from './address.png'
import {Table} from 'react-bootstrap'
import axios from 'axios';
import swal from 'sweetalert';



function OrderForm(props) {
    
    const{recordForEdit, setOpenPopup} = props;
    const orderStatus = recordForEdit.orderStatus;
    const orderNote = recordForEdit.note;
    const orderAddress = recordForEdit.orderAddress
    const orderID = recordForEdit.orderID

    const customerName= recordForEdit.customerName;
    const customerAvatar = recordForEdit.customerAvatar;
    const customerPhoneNumber = recordForEdit.customerPhoneNumber;
    const customerAddress = recordForEdit.customerAddress;
    const listItem= recordForEdit.listItem;
    const listItemName = recordForEdit.listItemName;
    const listItemPrice = recordForEdit.listItemPrice;
    const listQuantity = recordForEdit.listQuantity;

    /*
    const x = {
        customerId : recordForEdit.customerAccountId,
        listItemID : recordForEdit.listItemID,
    }
    
    axios.post('http://localhost:3000/order/get-info', x).then(res => {
            setCustomerName(res.data.customer.name);
            setCustomerAvatar(res.data.customer.avatar);
            setCustomerPhoneNumber(res.data.customer.phoneNumber);
            setCustomerAddress(res.data.customer.address);
            setListItem(res.data.listItem);
            setListItemName(res.data.listItemName);
            setListQuantity(recordForEdit.listQuantity);
        })
        */
    
    var items = [];
    var total = 0;
    var isEnough = true;
    for(let i = 0; i < listItem.length; i++)
    {
        var item = {
            img : "",
            name : "",
            price : 0,
            size : "",
            quantity : 0,
            remaining : 0
        };
        item.img = listItem[i].img;
        item.name = listItemName[i];
        item.price = listItemPrice[i];
        item.size = listItem[i].size;
        item.quantity = listQuantity[i];
        item.remaining = listItem[i].remaining;
        total += item.price * item.quantity;
        if(item.quantity > item.remaining){
            isEnough = false;
        }
        items.push(item);
        
    }

    let notification;
    if(orderStatus === "Chờ Xác Nhận")
    {
        if(isEnough)
        {
             notification = <div className={styles.enough}>Số Lượng Trong Kho Đủ</div>
        }
        else
        {
            notification = <div className={styles.notEnough}>Số Lượng Trong Kho Không Đủ !!!</div>
        }
    }
    else
    {
        notification = <div></div>
    }
    const huyChoXacNhan = (e) => {
        e.preventDefault();
        const x = {
            orderID : orderID
        }
        axios.post('http://localhost:3000/order/huyChoXacNhan/quan', x).then(
            (res) => {
            }
            )
            swal({
                title: "Successful",
                text: "Bạn đã hủy đơn thành công!",
                icon: "success",
                button: "Continue",
                timer: 2000,
            });
            setOpenPopup(false);
    }
    const huyDangGiao = () => {
        const x = {
            orderID : orderID,
            listItem : listItem,
            listQuantity : listQuantity
        }
        axios.post('http://localhost:3000/order/huyDangGiao/quan', x).then(
            (res) => {
            }
            )
        swal({
            title: "Successful",
            text: "Bạn đã hủy đơn thành công!",
            icon: "success",
            button: "Continue",
            timer: 2000,
        });
        setOpenPopup(false)
    }
    const xacNhan = () => {
        if(!isEnough)
        {
            swal({
                title: "Xác nhận không thành công",
                text: "Số lượng hàng trong kho không đủ",
                icon: "error",
                // buttons: true,
                dangerMode: true,
            });
        }
        else
        {
            const x = {
                orderID : orderID,
                listItem : listItem,
                listQuantity : listQuantity
            }
            axios.post('http://localhost:3000/order/xacNhan/quan', x).then(
            (res) => {
            }
            )
            swal({
                title: "Successful",
                text: "Đơn đã được xác nhận thành công!",
                icon: "success",
                button: "Continue",
                timer: 2000,
            });
            setOpenPopup(false);
        }
    }
    const giaoXong = () => {
        const x = {
            orderID : orderID
        }
        axios.post('http://localhost:3000/order/giaoXong/quan', x).then(
            (res) => {
            }
            )
        swal({
            title: "Successful",
            text: "Đơn đã giao xong!",
            icon: "success",
            button: "Continue",
            timer: 2000,
        });
        setOpenPopup(false);
    }
    let button1;
    let button2;
    
    if(orderStatus === "Chờ Xác Nhận")
    {
        button1 = <button className={styles.decline} onClick={(e) => huyChoXacNhan(e)}>Hủy Đơn</button>;
        button2 =  <button className={styles.confirm}onClick={() => xacNhan()}>Xác Nhận</button>
      
    }
    else if(orderStatus === "Đang Giao")
    {
        button1 = <button className={styles.decline} onClick={() => huyDangGiao()}>Hủy Đơn</button>;
        button2 =  <button className={styles.doneDelivery} onClick={() => giaoXong()}>Giao Xong</button>;
    }
    else
    {
        button1 = <div></div>
        button2 = <div></div>
    }
    let itemList;
    if(orderStatus === "Chờ Xác Nhận"){
        itemList = <Table className={styles.table}>
        <tr className={styles.head}>
            <td>Hình ảnh </td>
            <td>Vật phẩm</td>
            <td>Giá </td>
            <td>Số lượng</td>
            <td>Trong kho</td>
        </tr>
        {
            items.map((item) => 
                <tr>
                    <td> <img className={styles.itemImg} src={item.img}/></td>
                    <td>{item.name} ({item.size})</td>
                    <td>{item.price.toLocaleString()} VND</td>
                    <td>x{item.quantity}</td>
                    <td className={(item.remaining >= item.quantity ? styles.du : styles.kodu)}>{item.remaining}</td>
                </tr>
            )
        }
    </Table>
    }
    else
    {
        itemList = <Table className={styles.table}>
        <tr className={styles.head}>
            <td>Hình ảnh </td>
            <td>Vật phẩm</td>
            <td>Giá </td>
            <td>Số lượng</td>
           
        </tr>
        {
            items.map((item) => 
                <tr>
                    <td> <img className={styles.itemImg} src={item.img}/></td>
                    <td>{item.name} ({item.size})</td>
                    <td>{item.price.toLocaleString()} VND</td>
                    <td>x{item.quantity}</td>
                    
                </tr>
            )
        }
    </Table>
    }
    return (
        <div className={styles.orderDetail}>

            <div className={styles.customerInfo}>
                <img className={styles.cAvatar} src={customerAvatar} alt="avaCustomer" />
                <div className={styles.name}>{customerName}</div>
                <div className={styles.role}>Khách Hàng</div>
                <div className={styles.customerPhone}>
                    <img className={styles.phone}src={phone} alt="avaCustomer" />  
                    <div className={styles.phoneNumber}>{customerPhoneNumber}</div>
                </div>
                <div className={styles.customerAddress}>
                    <img className={styles.address} src={address} alt="avaCustomer" /> 
                    <div className={styles.addressText}>{customerAddress}</div> 
                </div>
                <div className={styles.note}>
                    <div className={styles.label}>Note : </div> 
                    <div>{orderNote}</div>
                </div>
            </div>
            <div class={styles.vl}></div>
            <div className={styles.orderInfo}>
                <div className={styles.status}>
                    Trạng Thái Đơn : {orderStatus}
                </div>
                
                <div className={styles.listItem}>
                    {itemList}
                </div>
                
                
                <div className={styles.total}>
                    <div className={styles.label}>Tổng Tiền (+ 20,000 VND tiền ship) : </div>
                    <div className={styles.text}>{(total+20000).toLocaleString()} VND</div>
                </div>
                <div className={styles.orderAddress}>
                    <div className={styles.label}>Địa chỉ: </div>
                    <div className={styles.text}>{orderAddress}</div>
                </div>
                <div className={styles.notification}>
                    {notification}
                </div>
                <div className={styles.buttons}>
                    {button1}
                    {button2}
                </div>
            </div>
        </div>
    )
}

export default OrderForm
 