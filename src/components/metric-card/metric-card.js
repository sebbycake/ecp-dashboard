import React from "react";
import caretUpIcon from "../../images/icons/caret-arrow-up.png"
import caretDownIcon from "../../images/icons/caret-arrow-down.png"
import * as styles from "./metric-card.module.css"

const MetricCard = ({title, icon, stats, growth_rate}) => {

    return (
        <div className={styles.metricCard}>
            <div className={styles.metricIconContainer}>
                <div className={styles.iconContainer}>
                    <img className={styles.userIcon} src={icon} alt="" />
                </div>
                <div className={styles.metricIconName}>{title}</div>
            </div>
            <div className={styles.metricDetailsContainer}>
                <div className={styles.metricNumber}>{stats}</div>
                <div className={styles.metricGrowthContainer}>
                    <div>
                        <img className={styles.caretUpIcon} src={growth_rate > 0 ? caretUpIcon : caretDownIcon} alt="" />
                    </div>
                    <div className={styles.metricGrowthRate}>{`${Math.abs(Math.round(growth_rate * 100))}%`}</div>
                </div>
            </div>
        </div>
    )

} // end of function

export default MetricCard