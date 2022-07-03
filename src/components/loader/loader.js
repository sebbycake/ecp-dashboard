import React from 'react'
import * as styles from './loader.module.css'

const Loader = () => {
    return (
        <div className={styles.spinner}>
            <div className={styles.doubleBounce1}></div>
            <div className={styles.doubleBounce2}></div>
        </div>
    )
}

export default Loader