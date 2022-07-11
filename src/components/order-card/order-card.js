import React from "react";
import * as styles from "./order-card.module.css";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Pie } from "react-chartjs-2";

import Loader from "../loader/loader"

Chart.register(ChartDataLabels);

const OrderCard = ({ status, data, quarter }) => {
	let dataRetrieved;
	let ordersData;

	if (status === "success") {
		dataRetrieved = data.data.data[quarter];
		ordersData = {
			labels: ["Online", "Offline"],
			datasets: [
				{
					data: [dataRetrieved.onlineOrders, dataRetrieved.offlineOrders],
					backgroundColor: ["#043776", "#53B7E8"],
					hoverOffset: 4,
				},
			],
		};
	}

	const pieChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				position: "bottom",
				labels: {
					boxWidth: 12,
					boxHeight: 12,
				},
			},
			tooltip: {
				enabled: false,
			},
			datalabels: {
				formatter: (value, context) => {
					const datapoints = context.chart.data.datasets[0].data;
					const totalSum = datapoints.reduce(
						(total, datapoint) => total + datapoint,
						0
					);
					const percentageValue = ((value / totalSum) * 100).toFixed(1);
					return `${percentageValue}%`;
				},
				color: "#fff",
			},
		},
	};

	return (
		<div className={styles.ordersMetricCard}>
			{status === "loading" ? (
				// <p style={{ marginLeft: "30px" }}>Loading data...</p>
				<div style={{ marginLeft: "30px" }}>
					<Loader />
				</div>
			) : status === "error" ? (
				<p style={{ marginLeft: "30px" }} className="errorMsg">Error retrieving data</p>
			) : (
				<div>
					<div className={styles.ordersPieChart}>
						<Pie data={ordersData} options={pieChartOptions} />
					</div>
					<div>
						<div className={styles.totalOrders}>
							{dataRetrieved.onlineOrders + dataRetrieved.offlineOrders}
						</div>
						<div
							className={styles.individualOrders}
						>{`Online: ${dataRetrieved.onlineOrders}`}</div>
						<div
							className={styles.individualOrders}
						>{`Offline: ${dataRetrieved.offlineOrders}`}</div>
					</div>
				</div>
			)}
		</div>
	);
}; // end of function

export default OrderCard;
