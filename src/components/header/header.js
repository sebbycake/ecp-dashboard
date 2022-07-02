import React from "react"
import equinix_logo from "../../images/equinix_logo.png"
import * as styles from "./header.module.css"

const Header = () => {

    return (
        <div className={styles.header}>
            <div>
                <img className={styles.logo} src={equinix_logo} alt="Equinix Logo" />
            </div>
            <select className={styles.dropdownBtn}>
                <option className={styles.options} value="Q1 2022">Q1 2022</option>
                <option className={styles.options} value="Q4 2021">Q4 2021</option>
                <option className={styles.options} value="Q3 2021">Q3 2021</option>
                <option className={styles.options} value="Q2 2021">Q2 2021</option>
            </select>
        </div>
    )

} // end of function

export default Header