import React from "react";
import * as styles from "./metric-card-list.module.css"
import MetricCard from "../metric-card/metric-card"
import MetricTitle from "../metric-title/metric-title"

import userIcon from "../../images/icons/user.png"
import commsIcon from "../../images/icons/communication.png"
import reportIcon from "../../images/icons/report.png"
import notificationIcon from "../../images/icons/notification.png"

import data from '../../dummy-data/metrics-data'

import { useUsersQuery, useCommsQuery, useReportsQuery, useNotificationsQuery } from "../../queries"

const MetricCardList = ({ quarter }) => {

    const { data: users } = useUsersQuery()
    const { data: comms } = useCommsQuery()
    const { data: reports } = useReportsQuery()
    const { data: notifications } = useNotificationsQuery()

    return (
        <div>
            <MetricTitle title="Quarterly Overview" />
            <div className={styles.metricsGrid}>
                {/* <MetricCard title="Users" icon={userIcon} stats={users.data.data[quarter].userAccounts} growth_rate={users.data.data[quarter].growthRate} />
                <MetricCard title="2-way Comms" icon={commsIcon} stats={comms.data.data[quarter].totalNumber} growth_rate={comms.data.data[quarter].growthRate} />
                <MetricCard title="Reports" icon={reportIcon} stats={reports.data.data[quarter].reports} growth_rate={reports.data.data[quarter].growthRate } />
                <MetricCard title="Notifications" icon={notificationIcon} stats={notifications.data.data[quarter].notifications} growth_rate={notifications.data.data[quarter].growthRate} /> */}
            </div>
        </div>
    )

} // end of function

export default MetricCardList