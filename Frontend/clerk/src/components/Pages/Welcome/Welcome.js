import React from 'react'
import styles from "./Welcome.module.scss"

function Welcome() {
    return (
        <div className={styles.Welcome}>
            <div className={styles.wctext}>It's a beautiful day to work!</div>
    </div>
    )
}

export default Welcome
