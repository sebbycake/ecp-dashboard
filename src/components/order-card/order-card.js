import React from "react";
import * as styles from "./order-card.module.css"
import { Pie } from 'react-chartjs-2';

const OrderCard = ({ordersDataObj}) => {

    const orders_data = {
        labels: ['Online', 'Offline'],
        datasets: [{
            data: [ordersDataObj.composition.online, ordersDataObj.composition.offline],
            backgroundColor: ['#043776', '#53B7E8'],
            hoverOffset: 4
        }]
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
                callbacks: {
                    label: (context) => {
                        return `${context.parsed}%`
                    }
                }
            }
        },
    }

    return (
        <div className={styles.ordersMetricCard}>
            <div className={styles.ordersPieChart}>
                <Pie data={orders_data} options={pie_chart_options} />
            </div>
            <div>
                <div className={styles.totalOrders}>{ordersDataObj.numOforders}</div>
                <div>{`Online: ${Math.round(ordersDataObj.composition.online * ordersDataObj.numOforders)}`}</div>
                <div>{`Offline: ${Math.round(ordersDataObj.composition.offline * ordersDataObj.numOforders)}`}</div>
            </div>
        </div>
    )

} // end of function

export default OrderCard