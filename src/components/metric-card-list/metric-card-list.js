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

const MetricCardList = ({ quarter }) => {

    const dummyUsersData = [
        {
            "quarter": "2022 Q1",
            "userAccounts": 1406,
            "growthRate": -0.11
        },
        {
            "quarter": "2021 Q4",
            "userAccounts": 2324,
            "growthRate": -0.09
        },
        {
            "quarter": "2021 Q3",
            "userAccounts": 2623,
            "growthRate": 0.39
        },
        {
            "quarter": "2021 Q2",
            "userAccounts": 1371,
            "growthRate": 0.18
        },
        {
            "quarter": "2021 Q1",
            "userAccounts": 1806,
            "growthRate": -0.10
        }
    ]

    const dummytwoWayCommsData = [
        {
            "quarter": "2022 Q1",
            "totalNumber": 502,
            "growthRate": -0.04
        },
        {
            "quarter": "2021 Q4",
            "totalNumber": 482,
            "growthRate": -0.13
        },
        {
            "quarter": "2021 Q3",
            "totalNumber": 443,
            "growthRate": -0.33
        },
        {
            "quarter": "2021 Q2",
            "totalNumber": 388,
            "growthRate": 0.44
        },
        {
            "quarter": "2021 Q1",
            "totalNumber": 2131,
            "growthRate": -0.66
        }
    ]

    const dummyReportsData = [
        {
            "quarter": "2022 Q1",
            "reports": 800,
            "growthRate": 0.12
        },
        {
            "quarter": "2021 Q4",
            "reports": 700,
            "growthRate": 0.13
        },
        {
            "quarter": "2021 Q3",
            "reports": 650,
            "growthRate": 0.11
        },
        {
            "quarter": "2021 Q2",
            "reports": 634,
            "growthRate": 0.16
        },
        {
            "quarter": "2021 Q1",
            "reports": 555,
            "growthRate": 0.11
        }
    ]

    
    const dummyInvoicesData = [
        {
            "quarter": "2022 Q1",
            "invoices": 100,
            "growthRate": 0.05
        },
        {
            "quarter": "2021 Q4",
            "invoices": 90,
            "growthRate": 0.11
        },
        {
            "quarter": "2021 Q3",
            "invoices": 80,
            "growthRate": 0.10
        },
        {
            "quarter": "2021 Q2",
            "invoices": 70,
            "growthRate": 0.09
        },
        {
            "quarter": "2021 Q1",
            "invoices": 65,
            "growthRate": 0.11
        }
    ]

    const dummyNotificationsData = [
        {
            "quarter": "2022 Q1",
            "notifications": 123,
            "growthRate": 0.10
        },
        {
            "quarter": "2021 Q4",
            "notifications": 111,
            "growthRate": 0.05
        },
        {
            "quarter": "2021 Q3",
            "notifications": 102,
            "growthRate": 0.04
        },
        {
            "quarter": "2021 Q2",
            "notifications": 104,
            "growthRate": 0.03
        },
        {
            "quarter": "2021 Q1",
            "notifications": 101,
            "growthRate": 0.01
        }
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
                <MetricCard title="Users" icon={userIcon} stats={dummyUsersData[quarter].userAccounts} growth_rate={dummyUsersData[quarter].growthRate} />
                <MetricCard title="2-way Comms" icon={commsIcon} stats={dummytwoWayCommsData[quarter].totalNumber} growth_rate={dummytwoWayCommsData[quarter].growthRate} />
                <MetricCard title="Reports" icon={reportIcon} stats={dummyReportsData[quarter].reports} growth_rate={dummyReportsData[quarter].growthRate} />
                <MetricCard title="Invoices" icon={invoiceIcon} stats={dummyInvoicesData[quarter].invoices} growth_rate={dummyInvoicesData[quarter].growthRate} />
                <MetricCard title="Notifications" icon={notificationIcon} stats={dummyNotificationsData[quarter].notifications} growth_rate={dummyNotificationsData[quarter].growthRate} />
            </div>
        </div>
    )

} // end of function

export default MetricCardList