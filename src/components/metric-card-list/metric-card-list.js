import React, { useState, useEffect } from "react";
import * as styles from "./metric-card-list.module.css"
import MetricCard from "../metric-card/metric-card"
import MetricTitle from "../metric-title/metric-title"
import axios from 'axios';

import userIcon from "../../images/icons/user.png"
import commsIcon from "../../images/icons/communication.png"
import reportIcon from "../../images/icons/report.png"
import invoiceIcon from "../../images/icons/invoice.png"
import notificationIcon from "../../images/icons/notification.png"

const MetricCardList = () => {

    // dummy data
    const metricsData = [
        { stats: 580, growth_rate: 0.25 },
        { stats: 300, growth_rate: 0.15 },
        { stats: 250, growth_rate: 0.07 },
        { stats: 600, growth_rate: 0.05 },
        { stats: 105, growth_rate: -0.10 },
    ]

    const [users, setUsers] = useState([])
    const [comms, setComms] = useState([])
    const [reports, setReports] = useState([])
    const [invoices, setInvoices] = useState([])
    const [notifications, setNotifications] = useState([])

    const fetchData = () => {

        const usersAPI = 'https://jsonplaceholder.typicode.com/posts/1'
        const commsAPI = 'https://jsonplaceholder.typicode.com/posts/2'
        const reportsAPI = 'https://jsonplaceholder.typicode.com/posts/4'
        const invoicesAPI = 'https://jsonplaceholder.typicode.com/posts/5'
        const notificationsAPI = 'https://jsonplaceholder.typicode.com/posts/6'

        const getUsers = axios.get(usersAPI)
        const getComms = axios.get(commsAPI)
        const getReports = axios.get(reportsAPI)
        const getInvoices = axios.get(invoicesAPI)
        const getNotifications = axios.get(notificationsAPI)

        axios.all([getUsers, getComms, getReports, getInvoices, getNotifications])
            .then(axios.spread((...allData) => {
                setUsers(allData[0].data)
                setComms(allData[1].data)
                setReports(allData[2].data)
                setInvoices(allData[3].data)
                setNotifications(allData[4].data)
            })
            )
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <MetricTitle title="Quarterly Overview" />
            <div className={styles.metricsGrid}>
                {/* dummy data  */}
                <MetricCard title="Users" icon={userIcon} stats={metricsData[0].stats} growth_rate={metricsData[0].growth_rate} />
                <MetricCard title="2-way Comms" icon={commsIcon} stats={metricsData[1].stats} growth_rate={metricsData[1].growth_rate} />
                <MetricCard title="Reports" icon={reportIcon} stats={metricsData[2].stats} growth_rate={metricsData[2].growth_rate} />
                <MetricCard title="Invoices" icon={invoiceIcon} stats={metricsData[3].stats} growth_rate={metricsData[3].growth_rate} />
                <MetricCard title="Notifications" icon={notificationIcon} stats={metricsData[4].stats} growth_rate={metricsData[4].growth_rate} />
                {/* <MetricCard title="Users" icon={userIcon} stats={users[0].userAccounts} growth_rate={users[0].growthRate} />
                <MetricCard title="2-way Comms" icon={commsIcon} stats={comms[0].totalNumber} growth_rate={comms[0].growthRate} />
                <MetricCard title="Reports" icon={reportIcon} stats={reports[0].stats} growth_rate={reports[0].growthRate} />
                <MetricCard title="Invoices" icon={invoiceIcon} stats={invoices[0].stats} growth_rate={invoices[0].growthRate} />
                <MetricCard title="Notifications" icon={notificationIcon} stats={notifications[0].stats} growth_rate={notifications[0].growthRate} /> */}
            </div>
        </div>
    )

} // end of function

export default MetricCardList