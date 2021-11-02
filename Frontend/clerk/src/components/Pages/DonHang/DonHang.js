import React from 'react'
import styles from "./DonHang.module.scss"
import Ava from "./assets/ava.PNG";


function DonHang() {
    return (
        
        <div className={styles.DonHang}>
            <div className={styles.label}>Đơn Hàng</div>
            <div className={styles.name}>Nguyen Van A</div>
            <div >
                <img className={styles.ava} src={Ava} alt="Ava" />
            </div>
            
        </div>
    )
}

export default DonHang
