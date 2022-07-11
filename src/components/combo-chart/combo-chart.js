import React, { useState } from "react";
import * as styles from "./combo-chart.module.css";

import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

import {
	useSmartHandsQuery,
	useCrossConnectQuery,
	useFabricPortQuery,
	useEquinixConnectQuery,
	useInternetExchangeQuery,
	useMetroConnectQuery,
} from "../../queries";

ChartJS.register(...registerables);

const ComboChart = () => {
	const calculateTotalOrders = (data) => {
		const totalOrders = [];
		data.forEach((obj) => {
			totalOrders.push(obj.onlineOrders + obj.offlineOrders);
		});
		return totalOrders.reverse();
	};

	const calculateOnlineComposition = (data) => {
		const onlineComposition = [];
		data.forEach((obj) => {
			const totalOrders = obj.onlineOrders + obj.offlineOrders;
			onlineComposition.push(
				parseInt(((obj.onlineOrders / totalOrders) * 100).toFixed(1), 10)
			);
		});
		return onlineComposition.reverse();
	};

	const getListOfQuarters = (data) => {
		const quarterList = [];
		data.forEach((obj) => {
			quarterList.push(obj.quarter);
		});
		return quarterList.reverse();
	};

	const { status: initialDataStatus, data: initialData } = useSmartHandsQuery();
	const { status: smartHandsStatus, data: smartHandsData } =
		useSmartHandsQuery();
	const { status: crossConnectStatus, data: crossConnectData } =
		useCrossConnectQuery();
	const { status: fabricPortStatus, data: fabricPortData } =
		useFabricPortQuery();
	const { status: equinixConnectStatus, data: equinixConnectData } =
		useEquinixConnectQuery();
	const { status: internetExchangeStatus, data: internetExchangeData } =
		useInternetExchangeQuery();
	const { status: metroConnectStatus, data: metroConnectData } =
		useMetroConnectQuery();

	const statusList = [
		initialDataStatus,
		smartHandsStatus,
		crossConnectStatus,
		fabricPortStatus,
		equinixConnectStatus,
		internetExchangeStatus,
		metroConnectStatus,
	];

	const [isActive, setIsActive] = useState([1, 0, 0, 0, 0, 0]);
	const [currData, setCurrData] = useState([]);
	const [chartData, setChartData] = useState([]);

	if (statusList.some((status) => status !== "success")) {
		return (
			<div>
				<div className={styles.selectorBtnContainer}></div>
				<div className={styles.ordersChartsContainer}>
					<p style={{ marginLeft: "30px" }}>
						{initialDataStatus === "loading"
							? "Loading data..."
							: "Error retrieving data"}
					</p>
				</div>
			</div>
		);
	} else {
		setCurrData(initialData);
		setChartData([
			calculateTotalOrders(initialData),
			calculateOnlineComposition(initialData),
		]);

		const updateState = (data, action) => {
			let updatedData = [...currData];
			if (action === "add") {
				for (let i = 0; i < updatedData.length; i++) {
					updatedData[i].onlineOrders += data[i].onlineOrders;
					updatedData[i].offlineOrders += data[i].offlineOrders;
				}
			}
			if (action === "subtract") {
				for (let i = 0; i < updatedData.length; i++) {
					updatedData[i].onlineOrders -= data[i].onlineOrders;
					updatedData[i].offlineOrders -= data[i].offlineOrders;
				}
			}
			setCurrData(updatedData);
			setChartData([
				calculateTotalOrders(updatedData),
				calculateOnlineComposition(updatedData),
			]);
		};

		const handleClick = (data, index) => {
			if (isActive[index] === 1) {
				updateState(data, "subtract");
				isActive[index] = 0;
				setIsActive(isActive);
			} else {
				updateState(data, "add");
				isActive[index] = 1;
				setIsActive(isActive);
			}
		};

		const ordersData = {
			labels: getListOfQuarters(initialData.data.data),
			datasets: [
				{
					label: "Total Orders",
					backgroundColor: "#A1A1A4",
					borderColor: "#A1A1A4",
					data: chartData[0],
					type: "bar",
					yAxisID: "y",
					order: 2,
				},
				{
					label: "Online Orders (ECP + CSC)",
					backgroundColor: "#043776",
					borderColor: "#043776",
					data: chartData[1],
					yAxisID: "percentage",
					order: 1,
					borderWidth: 5,
					tooltip: {
						callbacks: {
							label: (context) => {
								return `${context.dataset.label}: ${context.raw}%`;
							},
						},
					},
				},
			], // end of datasets key
		};

		const comboChartConfig = {
			responsive: true,
			maintainAspectRatio: false,
			barPercentage: 0.45,
			categoryPercentage: 0.45,
			plugins: {
				legend: {
					position: "bottom",
					reverse: true,
				},
				datalabels: {
					labels: {
						title: null,
					},
				},
			},
			scales: {
				x: {
					grid: {
						display: false,
					},
				},
				y: {
					grid: {
						display: false,
					},
					type: "linear",
					position: "left",
				},
				percentage: {
					type: "linear",
					position: "right",
					grid: {
						drawOnChartArea: false,
					},
					ticks: {
						callback: (value, index, values) => {
							return `${value}%`;
						},
					},
				},
			},
		};

		return (
			<div>
				<div className={styles.selectorBtnContainer}>
					<button
						className={`${styles.selectorBtn} ${
							isActive[0] === 1 && styles.active
						}`}
						onClick={() => handleClick(smartHandsData, 0)}
					>
						Smart Hands
					</button>
					<button
						className={`${styles.selectorBtn} ${
							isActive[1] === 1 && styles.active
						}`}
						onClick={() => handleClick(crossConnectData, 1)}
					>
						Cross Connect
					</button>
					<button
						className={`${styles.selectorBtn} ${
							isActive[2] === 1 && styles.active
						}`}
						onClick={() => handleClick(fabricPortData, 2)}
					>
						Fabric Port
					</button>
					<button
						className={`${styles.selectorBtn} ${
							isActive[3] === 1 && styles.active
						}`}
						onClick={() => handleClick(equinixConnectData, 3)}
					>
						Equinix Connect
					</button>
					<button
						className={`${styles.selectorBtn} ${
							isActive[4] === 1 && styles.active
						}`}
						onClick={() => handleClick(internetExchangeData, 4)}
					>
						Internet Exchange
					</button>
					<button
						className={`${styles.selectorBtn} ${
							isActive[5] === 1 && styles.active
						}`}
						onClick={() => handleClick(metroConnectData, 5)}
					>
						Metro Connect
					</button>
				</div>
				<div className={styles.ordersChartsContainer}>
					<div className={styles.ordersComboChart}>
						<Chart
							type="line"
							data={ordersData}
							options={comboChartConfig}
						/>
					</div>
				</div>
			</div>
		);
	}
};

export default ComboChart;
