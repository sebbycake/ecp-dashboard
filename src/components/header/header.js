import React from "react"
import equinix_logo from "../../images/equinix_logo.png"
import down_arrow from "../../images/icons/down-arrow.png"
import * as styles from "./header.module.css"

const Header = () => {

    return (
        <div className={styles.header}>
            <div>
                <img className={styles.logo} src={equinix_logo} alt="Equinix Logo" />
            </div>
            <div className={styles.dropdownBtn}>
                <div className={styles.btnText}>Q1 2022</div>
                <img className={styles.downArrow} src={down_arrow} alt="Down Arrow Icon" />
            </div>
        </div>
    )

} // end of function

export default Header