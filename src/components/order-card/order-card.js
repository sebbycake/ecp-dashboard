import React from "react";
import * as styles from "./order-card.module.css"
import { Chart } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { Pie } from 'react-chartjs-2';
Chart.register(ChartDataLabels)

const OrderCard = ({ ordersDataObj }) => {

    const orders_data = {
        labels: ['Online', 'Offline'],
        datasets: [{
            data: [ordersDataObj.onlineOrders, ordersDataObj.offlineOrders],
            backgroundColor: ['#043776', '#53B7E8'],
            hoverOffset: 4
        }],
    }

    const pie_chart_options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 12,
                    boxHeight: 12
                }
            },
            tooltip: {
                enabled: false
            },
            datalabels: {
                formatter: (value, context) => {
                    const datapoints = context.chart.data.datasets[0].data
                    const totalSum = datapoints.reduce( (total, datapoint) => total + datapoint, 0)
                    const percentageValue = (value / totalSum * 100).toFixed(1)
                    return `${percentageValue}%`
                },
                color: '#fff',
            }
        },
    }


    return (
        <div className={styles.ordersMetricCard}>
            <div className={styles.ordersPieChart}>
                <Pie data={orders_data} options={pie_chart_options} />
            </div>
            <div>
                <div className={styles.totalOrders}>{ordersDataObj.onlineOrders + ordersDataObj.offlineOrders}</div>
                <div className={styles.individualOrders}>{`Online: ${ordersDataObj.onlineOrders}`}</div>
                <div className={styles.individualOrders}>{`Offline: ${ordersDataObj.offlineOrders}`}</div>
            </div>
        </div>
    )

} // end of function

export default OrderCard