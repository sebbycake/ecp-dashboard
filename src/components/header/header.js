import React, { useState, useEffect } from "react"
import equinix_logo from "../../images/equinix_logo.png"
import * as styles from "./header.module.css"

import StateContainer from "../state-container/state-container"

const Header = () => {

    const [quarter, setQuarter] = useState(0);
    const [listOfQuarters, setListOfQuarters] = useState([])

    const handleChange = (e) => {
        setQuarter(e.target.value);
    }

    const sampleData = [
        {
            "quarter": "2022 Q1",
            "onlineOrders": 272,
            "offlineOrders": 2312
        },
        {
            "quarter": "2021 Q4",
            "onlineOrders": 143,
            "offlineOrders": 358
        },
        {
            "quarter": "2021 Q3",
            "onlineOrders": 16751,
            "offlineOrders": 10392
        },
        {
            "quarter": "2021 Q2",
            "onlineOrders": 62425,
            "offlineOrders": 7686
        },
        {
            "quarter": "2021 Q1",
            "onlineOrders": 1
        }
    ]

    const reverseString = (str) => str.split(" ").reverse().join(" ")

    const extractQuarters = (data) => {
        const qtrs = []
        data.forEach(obj => {
            qtrs.push(reverseString(obj.quarter))
        })
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
                <select className={styles.dropdownBtn} value={quarter} onChange={handleChange}>
                    <option className={styles.options} value="0">{listOfQuarters[0]}</option>
                    <option className={styles.options} value="1">{listOfQuarters[1]}</option>
                    <option className={styles.options} value="2">{listOfQuarters[2]}</option>
                    <option className={styles.options} value="3">{listOfQuarters[3]}</option>
                </select>
            </div>
            <StateContainer quarter={quarter}/>
        </div>
    )

} // end of function

export default Header