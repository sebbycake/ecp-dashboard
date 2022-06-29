import React from "react";
import * as styles from "./metric-card-list.module.css"
import MetricCard from "../metric-card/metric-card"
import MetricTitle from "../metric-title/metric-title"

import userIcon from "../../images/icons/user.png"
import commsIcon from "../../images/icons/communication.png"
import reportIcon from "../../images/icons/report.png"
import invoiceIcon from "../../images/icons/invoice.png"
import notificationIcon from "../../images/icons/notification.png"

const MetricCardList = () => {

    const metricsData = [
        { stats: 580, growth_rate: 0.25 },
        { stats: 300, growth_rate: 0.15 },
        { stats: 250, growth_rate: 0.07 },
        { stats: 600, growth_rate: 0.05 },
        { stats: 105, growth_rate: -0.10 },
      ]
      
    return (
        <div>
            <MetricTitle title="Quarterly Overview"/>
            <div className={styles.metricsGrid}>
            <MetricCard title="Users" icon={userIcon} stats={metricsData[0].stats} growth_rate={metricsData[0].growth_rate} />
            <MetricCard title="2-way Comms" icon={commsIcon} stats={metricsData[1].stats} growth_rate={metricsData[1].growth_rate} />
            <MetricCard title="Reports" icon={reportIcon} stats={metricsData[2].stats} growth_rate={metricsData[2].growth_rate} />
            <MetricCard title="Invoices" icon={invoiceIcon} stats={metricsData[3].stats} growth_rate={metricsData[3].growth_rate} />
            <MetricCard title="Notifications" icon={notificationIcon} stats={metricsData[4].stats} growth_rate={metricsData[4].growth_rate} />
            </div>
        </div>
    )

} // end of function

export default MetricCardList