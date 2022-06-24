import React from "react";
import userIcon from "../../images/icons/user.png"
import caretUpIcon from "../../images/icons/caret-arrow-up.png"
import caretDownIcon from "../../images/icons/caret-arrow-down.png"
import * as styles from "./metric-card.module.css"

const MetricCard = ({ metric }) => {

    return (
        <div className={styles.metricCard}>
            <div className={styles.metricIconContainer}>
                <div className={styles.iconContainer}>
                    <img className={styles.userIcon} src={userIcon} alt="" />
                </div>
                <div className={styles.metricIconName}>{metric.name}</div>
            </div>
            <div className={styles.metricDetailsContainer}>
                <div className={styles.metricNumber}>{metric.number}</div>
                <div className={styles.metricGrowthContainer}>
                    <div>
                        <img className={styles.caretUpIcon} src={metric.growth_rate > 0 ? caretUpIcon : caretDownIcon} alt="" />
                    </div>
                    <div className={styles.metricGrowthRate}>{`${Math.abs(Math.round(metric.growth_rate * 100))}%`}</div>
                </div>
            </div>
        </div>
    )

} // end of function

export default MetricCard