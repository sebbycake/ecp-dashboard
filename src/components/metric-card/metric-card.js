import React from "react";
import caretUpIcon from "../../images/icons/caret-arrow-up.png";
import caretDownIcon from "../../images/icons/caret-arrow-down.png";
import * as styles from "./metric-card.module.css";

const MetricCard = ({ title, icon, status, data, quarter, key }) => {
	let dataRetrieved;

	if (status === "success") {
		dataRetrieved = data.data.data;
	}

	return (
		<div className={styles.metricCard}>
			<div className={styles.metricIconContainer}>
				<div className={styles.iconContainer}>
					<img className={styles.userIcon} src={icon} alt="" />
				</div>
				<div className={styles.metricIconName}>{title}</div>
			</div>
			<div className={styles.metricDetailsContainer}>
				{status === "loading" ? (
					"Loading data..."
				) : status === "error" ? (
					"Error retrieving data"
				) : (
					<div>
						<div className={styles.metricNumber}>
							{dataRetrieved[quarter][key]}
						</div>
						<div className={styles.metricGrowthContainer}>
							<div>
								<img
									className={styles.caretUpIcon}
									src={
										dataRetrieved[quarter].growthRate > 0
											? caretUpIcon
											: caretDownIcon
									}
									alt=""
								/>
							</div>
							<div className={styles.metricGrowthRate}>{`${Math.abs(
								Math.round(dataRetrieved[quarter].growthRate * 100)
							)}%`}</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}; // end of function

export default MetricCard;