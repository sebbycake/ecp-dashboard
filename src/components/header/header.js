import React, { useState, useEffect } from "react"
import equinix_logo from "../../images/equinix_logo.png"
import * as styles from "./header.module.css"

import Loader from "../loader/loader"

const Header = ({ setQuarter }) => {
    
    const [listOfQuarters, setListOfQuarters] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const handleChange = (e) => {
        setQuarter(e.target.value);
    }

    const sampleData = [
        {
            "quarter": "Q1 2022",
            "onlineOrders": 272,
            "offlineOrders": 2312
        },
        {
            "quarter": "Q4 2021",
            "onlineOrders": 143,
            "offlineOrders": 358
        },
        {
            "quarter": "Q3 2021",
            "onlineOrders": 16751,
            "offlineOrders": 10392
        },
        {
            "quarter": "Q2 2021",
            "onlineOrders": 62425,
            "offlineOrders": 7686
        }
    ]


    const extractQuarters = (data) => {
        const qtrs = []
        data.forEach(obj => qtrs.push(obj.quarter))
        setListOfQuarters(qtrs)
    }

    useEffect(() => {
        extractQuarters(sampleData)
    }, [])

    return (
        <div>
            <div className={styles.header}>
                <div>
                    <img className={styles.logo} src={equinix_logo} alt="Equinix Logo" />
                </div>
                <select className={styles.dropdownBtn} onChange={handleChange}>
                    <option className={styles.options} value="0">{listOfQuarters[0]}</option>
                    <option className={styles.options} value="1">{listOfQuarters[1]}</option>
                    <option className={styles.options} value="2">{listOfQuarters[2]}</option>
                    <option className={styles.options} value="3">{listOfQuarters[3]}</option>
                </select>
            </div>
        </div>
    )

} // end of function

export default Header