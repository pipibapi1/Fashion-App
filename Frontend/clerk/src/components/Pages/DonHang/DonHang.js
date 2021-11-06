import {DataGrid} from '@material-ui/data-grid'
import React, { Component } from 'react'
import styles from "./DonHang.module.scss"
import axios from 'axios';




const columns  = [
    {field: 'id', headerName: 'ID',headerClassName: 'super-app-theme--header', headerAlign: 'center'},
    {field: 'title', headerName: 'Title', width : 300,headerClassName: 'super-app-theme--header', headerAlign: 'center'},
    {field: 'body', headerName: 'Body', width :400,headerClassName: 'super-app-theme--header', headerAlign: 'center'},
    {field: 'detail', headerName: 'Detail', width : 200,headerClassName: 'super-app-theme--header', headerAlign: 'center'}
]


export default class DonHang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar : localStorage.getItem('avatar'),
            name : localStorage.getItem('name'),
            tableData : []
        }
        axios.get('http://localhost:3000/test').then(res => {
            if(res.data.length > 0){
                this.setState({tableData : res.data})
            }
        })
    }

    render(){
        
    return (
        
        <div className={styles.DonHang}>
            <div className={styles.label}>Đơn Hàng</div>
            <div className={styles.name}>{this.state.name}</div>
            <div >
                <img className={styles.ava} src={this.state.avatar} alt="Ava" />
            </div>
            
            <div id="rectangle" className={styles.outerBox}>
                    <div>filter goes here</div>
                    <div style={{height:650, width: '100%'}}>
                        <DataGrid

                                rows={this.state.tableData}
                                rowHeight={120}
                                columns={columns}
                                pageSize={5}
                                checkboxSelection
                                
                        />
                    </div>
            </div>
        </div>
    )
    }


}


