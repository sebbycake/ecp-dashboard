import React, { useState, useEffect } from "react";
import * as styles from "./metric-card-list.module.css"
import MetricCard from "../metric-card/metric-card"
import MetricTitle from "../metric-title/metric-title"
import axios from 'axios';

import userIcon from "../../images/icons/user.png"
import commsIcon from "../../images/icons/communication.png"
import reportIcon from "../../images/icons/report.png"
import notificationIcon from "../../images/icons/notification.png"

import data from '../../dummy-data/metrics-data'

const MetricCardList = ({ quarter }) => {

    const [users, setUsers] = useState(data.users)
    const [comms, setComms] = useState(data.comms)
    const [reports, setReports] = useState(data.reports)
    const [notifications, setNotifications] = useState(data.notifications)

    const fetchData = () => {

        const usersAPI = process.env.GATSBY_TOTAL_USERS_API_URL
        const commsAPI = process.env.GATSBY_TOTAL_TWO_WAY_COMMS_API_URL
        const reportsAPI = process.env.GATSBY_TOTAL_REPORTS_API_URL
        const notificationsAPI = process.env.GATSBY_TOTAL_NOTIFICATIONS_API_URL

        const getUsers = axios.get(usersAPI)
        const getComms = axios.get(commsAPI)
        const getReports = axios.get(reportsAPI)
        const getNotifications = axios.get(notificationsAPI)

        axios.all([getUsers, getComms, getReports, getNotifications])
            .then(axios.spread((...allData) => {
                setUsers(allData[0].data)
                setComms(allData[1].data)
                setReports(allData[2].data)
                setNotifications(allData[3].data)
            })
            )
    }

    // useEffect(() => {
    //     fetchData()
    // }, [])

    return (
        <div>
            <MetricTitle title="Quarterly Overview" />
            <div className={styles.metricsGrid}>
                <MetricCard title="Users" icon={userIcon} stats={users[quarter].userAccounts} growth_rate={users[quarter].growthRate} />
                <MetricCard title="2-way Comms" icon={commsIcon} stats={comms[quarter].totalNumber} growth_rate={comms[quarter].growthRate} />
                <MetricCard title="Reports" icon={reportIcon} stats={reports[quarter].reports} growth_rate={reports[quarter].growthRate} />
                <MetricCard title="Notifications" icon={notificationIcon} stats={notifications[quarter].notifications} growth_rate={notifications[quarter].growthRate} />
            </div>
        </div>
    )

} // end of function

export default MetricCardList