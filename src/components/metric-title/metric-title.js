import React from "react";
import * as styles from "./metric-title.module.css"

const MetricTitle = ({title}) => {

    return (
        <div className={styles.metricTitle}>
            {title}
        </div>
    )

} // end of function

export default MetricTitle