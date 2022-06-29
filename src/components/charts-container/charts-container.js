import React from "react";
import * as styles from "./charts-container.module.css"
import MetricTitle from "../metric-title/metric-title";
import OrderCard from "../order-card/order-card"

// charts components import
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js'

ChartJS.register(...registerables)

const ChartsContainer = () => {

    const total_order_card = {
        canvas_id: "total-orders-pie-chart",
        totalOrders: "9,000",
        onlineOrders: "8,000",
        offlineOrders: "1,000"
    }

    const cancelled_order_card = {
        canvas_id: "cancelled-orders-pie-chart",
        totalOrders: "5,000",
        onlineOrders: "4,000",
        offlineOrders: "1,000"
    }

    const renderOrdersData = (data_list) => {
        const orders_data = {
            labels: ['Online', 'Offline'],
            datasets: [{
                data: data_list,
                backgroundColor: ['#043776', '#53B7E8'],
                hoverOffset: 4
            }]
        }
        return orders_data
    }

    const pie_chart_options = {
        // responsive: true,
        // aspectRatio: 1.2,
        // maintainAspectRatio: true,
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

    const specific_order_type_data = {
        labels: ['Q2 2021', 'Q3 2021', 'Q4 2021', 'Q1 2022'],
        datasets: [
            {
                label: 'All',
                fill: true,
                backgroundColor: 'rgba(165, 108, 193, 0.4)',
                borderColor: 'rgb(165, 108, 193)',
                data: [74, 75, 76, 77],
            },
            {
                label: 'Smart Hands',
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.4)',
                borderColor: 'rgb(255, 99, 132)',
                data: [73, 75, 74, 77],
                hidden: true,
            },
            {
                label: 'Cross Connect',
                fill: true,
                backgroundColor: 'rgba(8, 95, 99, 0.4)',
                borderColor: 'rgb(8, 95, 99)',
                data: [77, 78, 78, 78],
                hidden: true,
            },
            {
                label: 'Fabric Port',
                fill: true,
                backgroundColor: 'rgba(234, 193, 0, 0.4)',
                borderColor: 'rgb(234, 193, 0)',
                data: [42, 42, 44, 46],
                hidden: true,
            },
            {
                label: 'Equinix Connect',
                fill: true,
                backgroundColor: 'rgba(30, 42, 120, 0.4)',
                borderColor: 'rgb(30, 42, 120)',
                data: [10, 9, 10, 13],
                hidden: true,
            },
            {
                label: 'Internet Exchange',
                fill: true,
                backgroundColor: 'rgba(93, 93, 90, 0.4)',
                borderColor: 'rgb(93, 93, 90)',
                data: [16, 17, 10, 10],
                hidden: true,
            },
            {
                label: 'Metro Connect',
                backgroundColor: 'rgba(47, 137, 252, 0.4)',
                borderColor: 'rgb(47, 137, 252)',
                data: [49, 45, 46, 50],
                hidden: true,
            },
        ] // end of datasets key
    };

    const line_chart_options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        console.log(context)
                        return `${context.raw}%`
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    callback: (value, index, values) => {
                        return `${value}%`
                    }
                }
            }
        }
    }

    return (
        <section className={styles.ordersCardContainer}>

            <div className={styles.ordersGridContainer}>
                <MetricTitle title="Orders By Category" />
                <div className={styles.ordersCharts}>
                    {/* <SelectorBtnList /> */}
                    <div class={styles.ordersChartsContainer}>
                        <div class={styles.ordersComboChart}>
                            <Chart type="line" data={specific_order_type_data} options={line_chart_options} />
                        </div>
                    </div>
                </div> {/* end of orders charts */}
            </div> {/* end of grid container */}

            <div className={styles.ordersMetricCardA}>
                <MetricTitle title="Orders By Channel" />
                <OrderCard order_card={total_order_card} chart={<Chart type="pie" data={renderOrdersData([65, 35])} options={pie_chart_options} />} />
            </div>

            <div className={styles.ordersMetricCardB}>
                <MetricTitle title="Cancelled Orders By Channel" />
                <OrderCard order_card={cancelled_order_card} chart={<Chart type="pie" data={renderOrdersData([80, 20])} options={pie_chart_options} />} />
            </div>

        </section>
    )

} // end of function

export default ChartsContainer