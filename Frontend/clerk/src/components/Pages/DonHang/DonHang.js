import React, { Component } from 'react'
import styles from "./DonHang.module.scss"



export default class DonHang extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
            avatar : localStorage.getItem('avatar'),
            
        }
    }


    render(){
    return (
        
        <div className={styles.DonHang}>
            <div className={styles.label}>Đơn Hàng</div>
            <div className={styles.name}>Nguyen Van A</div>
            <div >
                <img className={styles.ava} src={this.state.avatar} alt="Ava" />
            </div>
            
        </div>
    )
    }
}


