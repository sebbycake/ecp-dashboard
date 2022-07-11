import React from "react";
import * as styles from "./metric-card-list.module.css"
import MetricCard from "../metric-card/metric-card"
import MetricTitle from "../metric-title/metric-title"

import userIcon from "../../images/icons/user.png"
import commsIcon from "../../images/icons/communication.png"
import reportIcon from "../../images/icons/report.png"
import notificationIcon from "../../images/icons/notification.png"

import { useUsersQuery, useCommsQuery, useReportsQuery, useNotificationsQuery } from "../../queries"

const MetricCardList = ({ quarter }) => {

    const { status: usersStatus, data: users } = useUsersQuery()
    const { status: commsStatus, data: comms } = useCommsQuery()
    const { status: reportsStatus, data: reports } = useReportsQuery()
    const { status: notificationsStatus, data: notifications } = useNotificationsQuery()

    return (
        <div>
            <MetricTitle title="Quarterly Overview" />
            <div className={styles.metricsGrid}>
                <MetricCard title="Users" icon={userIcon} status={usersStatus} data={users} quarter={quarter} key="userAccounts" />
                <MetricCard title="2-way Comms" icon={commsIcon} status={commsStatus} data={comms} quarter={quarter} key="totalNumber" />
                <MetricCard title="Reports" icon={reportIcon} status={reportsStatus} data={reports} quarter={quarter} key="reports" />
                <MetricCard title="Notifications" icon={notificationIcon} status={notificationsStatus} data={notifications} quarter={quarter} key="notifications" />
            </div>
        </div>
    )

} // end of function

export default MetricCardList