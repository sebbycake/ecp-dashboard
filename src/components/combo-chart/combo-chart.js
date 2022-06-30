import React, { useState } from "react";
import * as styles from "./combo-chart.module.css"

import { Chart } from "react-chartjs-2"
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables)

const ComboChart = () => {

    const SHData = [[51, 52, 53, 54], [74, 75, 76, 77]]
    const CCData = [[44, 42, 45, 40], [70, 71, 72, 73]]
    const FPData = [[31, 32, 33, 34], [60, 61, 66, 67]]
    const ECData = [[11, 32, 13, 24], [15, 11, 10, 17]]
    const IXData = [[51, 52, 53, 54], [84, 76, 71, 70]]
    const MCData = [[44, 43, 44, 45], [10, 11, 12, 13]]

    const [chartData, setChartData] = useState(SHData)
    const [isActive, setIsActive] = useState([1, 0, 0, 0, 0, 0])

    const handleClick = (data, index) => {
        setChartData(data)
        let resetIndices = [0, 0, 0, 0, 0, 0]
        resetIndices[index] = 1
        setIsActive(resetIndices)
    }

    const orders_data = {
        labels: ['Q2 2021', 'Q3 2021', 'Q4 2021', 'Q1 2022'],
        datasets: [
            {
                label: "Orders",
                backgroundColor: '#043776',
                borderColor: '#043776',
                data: chartData[0], 
                type: "bar",
                yAxisID: 'y',
                order: 2
            },
            {
                label: "Online Composition",
                backgroundColor: '#A1A1A4',
                borderColor: '#A1A1A4',
                data: chartData[1],
                type: 'line',
                yAxisID: 'percentage',
                order: 1,
                borderWidth: 5
            },
        ] // end of datasets key
    }

    const combo_chart_config = {
        responsive: true,
        maintainAspectRatio: false,
        barPercentage: 0.45,
        categoryPercentage: 0.45,
        plugins: {
            legend: {
                position: 'bottom',
                reverse: true,
            },
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
                type: 'linear',
                position: 'left',
                ticks: {
                    callback: (value, index, values) => {
                        return `${value}K`
                    }
                }
            },
            percentage: {
                type: 'linear',
                position: 'right',
                grid: {
                    drawOnChartArea: false
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
        <div className={styles.ordersChartsContainer}>
            <button className={`${styles.selectorBtn} ${isActive[0] === 1 && styles.active}`} onClick={() => handleClick(SHData, 0)}>Smart Hands</button>
            <button className={`${styles.selectorBtn} ${isActive[1] === 1 && styles.active}`} onClick={() => handleClick(CCData, 1)}>Cross Connect</button>
            <button className={`${styles.selectorBtn} ${isActive[2] === 1 && styles.active}`} onClick={() => handleClick(FPData, 2)}>Fabric Port</button>
            <button className={`${styles.selectorBtn} ${isActive[3] === 1 && styles.active}`} onClick={() => handleClick(ECData, 3)}>Equinix Connect</button>
            <button className={`${styles.selectorBtn} ${isActive[4] === 1 && styles.active}`} onClick={() => handleClick(IXData, 4)}>Internet Exchange</button>
            <button className={`${styles.selectorBtn} ${isActive[5] === 1 && styles.active}`} onClick={() => handleClick(MCData, 5)}>Metro Connect</button>
            <div className={styles.ordersComboChart}>
                <Chart type="line" data={orders_data} options={combo_chart_config} />
            </div>
        </div>
    )
    
}

export default ComboChart