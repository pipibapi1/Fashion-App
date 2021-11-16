import React, { Component } from 'react'
import styles from "./DonHang.module.scss"
import axios from 'axios';

import OrderForm from "./OrderForm";
import { Paper, TableBody, TableRow, TableCell } from '@material-ui/core';
import Controls from "./Controls";
import Popup from "./Popup";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { Table, TableHead, TablePagination, TableSortLabel } from '@material-ui/core'
import Tabs from "./Tabs";
import './tab.css';



const headCells = [
    { id: 'id', label: 'Mã Đơn Hàng' },
    { id: 'date', label: 'Ngày Đặt' },
    { id: 'name', label: 'Mã Khách Hàng' },
    { id: 'status', label: 'Trạng Thái' },
    { id: 'actions', label: 'Chi Tiết', disableSorting: true }
]




export default class DonHang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar : localStorage.getItem('avatar'),
            name : localStorage.getItem('name'),
            tableData : [],
            quan : "",
            
            recordForEdit : null,
            records : [],
            cxn : [],
            dggiao : [],
            dgiao : [],
            bh : [],
            filterFn : { fn: items => { return items; } },
            openPopup : false,
            pages : [5,10,25],
            page : 0,
            rowsPerPage : 5,
            order : null,
            orderBy : null 
        }
        axios.post('http://localhost:3000/order/get-all/quan').then(res => {
            if(res.data.length > 0){
                const all = res.data;
                const cxn = all.filter(order => order.status === "Chờ Xác Nhận");
                const dggiao = all.filter(order => order.status === "Đang Giao");
                const dgiao = all.filter(order => order.status === "Đã Giao");
                const bh = all.filter(order => order.status === "Bị Hủy");

                this.setState({
                    records : all,
                    cxn : cxn,
                    dggiao : dggiao,
                    dgiao : dgiao,
                    bh : bh
                });
            }
        })
    }

    render(){
    
        const TblContainer = props => (
            <Table>
                {props.children}
            </Table>
        )
        const TblHead = props => {

            const handleSortRequest = cellId => {
                const isAsc = this.state.orderBy === cellId && this.state.order === "asc";
                if(isAsc)
                {
                    this.setState({
                        order : 'desc'
                    })
                }
                else{
                    this.setState({
                        order : 'asc'
                    })
                }
                this.setState({
                    orderBy : cellId
                })
            }
    
            return (<TableHead>
                <TableRow>
                    {
                        headCells.map(headCell => (
                            <TableCell key={headCell.id}
                                sortDirection={this.state.orderBy === headCell.id ? this.state.order : false}>
                                {headCell.disableSorting ? headCell.label :
                                    <TableSortLabel
                                        active={this.state.orderBy === headCell.id}
                                        direction={this.state.orderBy === headCell.id ? this.state.order : 'asc'}
                                        onClick={() => { handleSortRequest(headCell.id) }}>
                                        {headCell.label}
                                    </TableSortLabel>
                                }
                            </TableCell>))
                    }
                </TableRow>
            </TableHead>)
        }
        const handleChangePage = (event, newPage) => {
            this.setState({
                page : newPage
            })
        }
    
        const handleChangeRowsPerPage = event => {
            this.setState({
                rowsPerPage : parseInt(event.target.value, 10)
            })
            this.setState({
                page : 0
            })
        }

        const TblPagination = () => (<TablePagination
            component="div"
            page={this.state.page}
            rowsPerPageOptions={this.state.pages}
            rowsPerPage={this.state.rowsPerPage}
            count={this.state.records.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />)

        function stableSort(array, comparator) {
            const stabilizedThis = array.map((el, index) => [el, index]);
            stabilizedThis.sort((a, b) => {
                const order = comparator(a[0], b[0]);
                if (order !== 0) return order;
                return a[1] - b[1];
            });
            return stabilizedThis.map((el) => el[0]);
        }
    
        function getComparator(order, orderBy) {
            return order === 'desc'
                ? (a, b) => descendingComparator(a, b, orderBy)
                : (a, b) => -descendingComparator(a, b, orderBy);
        }
    
        function descendingComparator(a, b, orderBy) {
            if (b[orderBy] < a[orderBy]) {
                return -1;
            }
            if (b[orderBy] > a[orderBy]) {
                return 1;
            }
            return 0;
        }
        const recordsAfterPagingAndSorting = (list) => {
            return stableSort(this.state.filterFn.fn(list), getComparator(this.state.order, this.state.orderBy))
                .slice(this.state.page * this.state.rowsPerPage, (this.state.page + 1) * this.state.rowsPerPage)
        }


    const openInPopup = item => {

        const x = {
            customerId : item.customerAccountId,
            listItemID : item.listItemID,
        }
        var detail = {
            customerName : "",
            customerAvatar : "",
            customerPhoneNumber : "",
            customerAddress : "",
            listItem : [],
            listItemName : [],
            listItemPrice : [],
            listQuantity : [],
            orderID : "",
            orderStatus : "",
            note : "",
            orderAddress : ""
        }
        axios.post('http://localhost:3000/order/get-info/quan', x).then(res => {
            detail.customerName = res.data.customer.name;
            detail.customerAvatar = res.data.customer.avatar;
            detail.customerPhoneNumber = res.data.customer.phoneNumber;
            detail.customerAddress = res.data.customer.address;
            detail.listItem = res.data.listItem;
            detail.listItemName = res.data.listItemName;
            detail.listItemPrice = res.data.listItemPrice;
            detail.listQuantity = item.listQuantity;
            detail.orderID = item.id;
            detail.orderStatus = item.status;
            detail.note = item.note;
            detail.orderAddress = item.address;
            this.setState({
                recordForEdit : detail
            })
            this.setState({
                openPopup : true
            })
            this.setState({
                quan : detail.orderID
            })
        })
        
    }
    const setOpenPopup = S => {
        this.setState({
            openPopup : S
        })
    }
    return (
        
        <div className={styles.DonHang}>
            <div className={styles.label}>Đơn Hàng</div>
            <div className={styles.name}>{this.state.name}</div>
            <div >
                <img className={styles.ava} src={this.state.avatar} alt="Ava" />
            </div>
            
            <div id="rectangle" className={styles.outerBox}>
                    
                    <Tabs> 
                        <div label="Tất Cả">
                        <Paper >
                        <TblContainer>
                        <TblHead />
                            <TableBody>
                            {
                             recordsAfterPagingAndSorting(this.state.records).map(item =>
                             (
                            <TableRow key={item.id}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.date}</TableCell>
                                    <TableCell>{item.customerAccountId}</TableCell>
                                    <TableCell>{item.status}</TableCell>
                                    <TableCell>
                                            <Controls.ActionButton
                                            color="primary"
                                            onClick={() => { openInPopup(item) }}>
                                            <EditOutlinedIcon fontSize="small" />
                                             </Controls.ActionButton>
                                    </TableCell>
                            </TableRow>)
                            )
                             }
                            </TableBody>
                        </TblContainer>
                        <TblPagination />
                    </Paper>
                    
                        </div>
                        <div label="Chờ Xác Nhận">
                        <Paper >
                        <TblContainer>
                        <TblHead />
                            <TableBody>
                            {
                             recordsAfterPagingAndSorting(this.state.cxn).map(item =>
                             (
                            <TableRow key={item.id}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.date}</TableCell>
                                    <TableCell>{item.customerAccountId}</TableCell>
                                    <TableCell>{item.status}</TableCell>
                                    <TableCell>
                                            <Controls.ActionButton
                                            color="primary"
                                            onClick={() => { openInPopup(item) }}>
                                            <EditOutlinedIcon fontSize="small" />
                                             </Controls.ActionButton>
                                    </TableCell>
                            </TableRow>)
                            )
                             }
                            </TableBody>
                        </TblContainer>
                        <TblPagination />
                    </Paper>
                    
                        </div>
                        <div label="Đang Giao">
                        <Paper >
                        <TblContainer>
                        <TblHead />
                            <TableBody>
                            {
                             recordsAfterPagingAndSorting(this.state.dggiao).map(item =>
                             (
                            <TableRow key={item.id}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.date}</TableCell>
                                    <TableCell>{item.customerAccountId}</TableCell>
                                    <TableCell>{item.status}</TableCell>
                                    <TableCell>
                                            <Controls.ActionButton
                                            color="primary"
                                            onClick={() => { openInPopup(item) }}>
                                            <EditOutlinedIcon fontSize="small" />
                                             </Controls.ActionButton>
                                    </TableCell>
                            </TableRow>)
                            )
                             }
                            </TableBody>
                        </TblContainer>
                        <TblPagination />
                    </Paper>
                    
                        </div>
                        <div label="Đã Giao">
                        <Paper >
                        <TblContainer>
                        <TblHead />
                            <TableBody>
                            {
                             recordsAfterPagingAndSorting(this.state.dgiao).map(item =>
                             (
                            <TableRow key={item.id}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.date}</TableCell>
                                    <TableCell>{item.customerAccountId}</TableCell>
                                    <TableCell>{item.status}</TableCell>
                                    <TableCell>
                                            <Controls.ActionButton
                                            color="primary"
                                            onClick={() => { openInPopup(item) }}>
                                            <EditOutlinedIcon fontSize="small" />
                                             </Controls.ActionButton>
                                    </TableCell>
                            </TableRow>)
                            )
                             }
                            </TableBody>
                        </TblContainer>
                        <TblPagination />
                    </Paper>
                    
                        </div>
                        <div label="Bị Hủy">
                        <Paper >
                        <TblContainer>
                        <TblHead />
                            <TableBody>
                            {
                             recordsAfterPagingAndSorting(this.state.bh).map(item =>
                             (
                            <TableRow key={item.id}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.date}</TableCell>
                                    <TableCell>{item.customerAccountId}</TableCell>
                                    <TableCell>{item.status}</TableCell>
                                    <TableCell>
                                            <Controls.ActionButton
                                            color="primary"
                                            onClick={() => { openInPopup(item) }}>
                                            <EditOutlinedIcon fontSize="small" />
                                             </Controls.ActionButton>
                                    </TableCell>
                            </TableRow>)
                            )
                             }
                            </TableBody>
                        </TblContainer>
                        <TblPagination />
                    </Paper>
                    
                        </div>
                    </Tabs>
                    <Popup
                    title="Chi Tiết Đơn Hàng"
                    orderid={this.state.quan}
                    openPopup={this.state.openPopup}
                    setOpenPopup={setOpenPopup}
                    >
                            <OrderForm
                            recordForEdit={this.state.recordForEdit}
                             />
                    </Popup>
            </div>
        </div>
    )
    }


}

