import React from "react";
import * as styles from "./metric-card-list.module.css"
import MetricCard from "../metric-card/metric-card"

import userIcon from "../../images/icons/user.png"
import commsIcon from "../../images/icons/communication.png"
import reportIcon from "../../images/icons/report.png"
import invoiceIcon from "../../images/icons/invoice.png"
import notificationIcon from "../../images/icons/notification.png"

const MetricCardList = ({data}) => {

    return (
        <div className={styles.metricsGrid}>
            <MetricCard title="Users" icon={userIcon} stats={data[0].stats} growth_rate={data[0].growth_rate} />
            <MetricCard title="2-way Comms" icon={commsIcon} stats={data[1].stats} growth_rate={data[1].growth_rate} />
            <MetricCard title="Reports" icon={reportIcon} stats={data[2].stats} growth_rate={data[2].growth_rate} />
            <MetricCard title="Invoices" icon={invoiceIcon} stats={data[3].stats} growth_rate={data[3].growth_rate} />
            <MetricCard title="Notifications" icon={notificationIcon} stats={data[4].stats} growth_rate={data[4].growth_rate} />
        </div>
    )

} // end of function

export default MetricCardList