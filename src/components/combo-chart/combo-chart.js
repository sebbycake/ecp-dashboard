import React, { useState } from "react";
import * as styles from "./combo-chart.module.css"

import { Chart } from "react-chartjs-2"
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables)

const ComboChart = () => {
    
    const SHData = [
        {
            "quarter": "2022 Q1",
            "onlineOrders": 120,
            "offlineOrders": 50
        },
        {
            "quarter": "2021 Q4",
            "onlineOrders": 102,
            "offlineOrders": 44
        },
        {
            "quarter": "2021 Q3",
            "onlineOrders": 100,
            "offlineOrders": 50
        },
        {
            "quarter": "2021 Q2",
            "onlineOrders": 99,
            "offlineOrders": 40
        }
    ]

    const CCData = [
        {
            "quarter": "2022 Q1",
            "onlineOrders": 120,
            "offlineOrders": 50
        },
        {
            "quarter": "2021 Q4",
            "onlineOrders": 102,
            "offlineOrders": 55
        },
        {
            "quarter": "2021 Q3",
            "onlineOrders": 100,
            "offlineOrders": 100
        },
        {
            "quarter": "2021 Q2",
            "onlineOrders": 99,
            "offlineOrders": 92
        }
    ]

    const FPData = [
        {
            "quarter": "2022 Q1",
            "onlineOrders": 120,
            "offlineOrders": 50
        },
        {
            "quarter": "2021 Q4",
            "onlineOrders": 102,
            "offlineOrders": 55
        },
        {
            "quarter": "2021 Q3",
            "onlineOrders": 100,
            "offlineOrders": 100
        },
        {
            "quarter": "2021 Q2",
            "onlineOrders": 99,
            "offlineOrders": 92
        }
    ]

    const ECData = [
        {
            "quarter": "2022 Q1",
            "onlineOrders": 80,
            "offlineOrders": 30
        },
        {
            "quarter": "2021 Q4",
            "onlineOrders": 102,
            "offlineOrders": 55
        },
        {
            "quarter": "2021 Q3",
            "onlineOrders": 100,
            "offlineOrders": 100
        },
        {
            "quarter": "2021 Q2",
            "onlineOrders": 99,
            "offlineOrders": 92
        }
    ]

    const IXData = [
        {
            "quarter": "2022 Q1",
            "onlineOrders": 100,
            "offlineOrders": 50
        },
        {
            "quarter": "2021 Q4",
            "onlineOrders": 102,
            "offlineOrders": 55
        },
        {
            "quarter": "2021 Q3",
            "onlineOrders": 100,
            "offlineOrders": 100
        },
        {
            "quarter": "2021 Q2",
            "onlineOrders": 99,
            "offlineOrders": 92
        }
    ]

    const MCData = [
        {
            "quarter": "2022 Q1",
            "onlineOrders": 120,
            "offlineOrders": 30
        },
        {
            "quarter": "2021 Q4",
            "onlineOrders": 70,
            "offlineOrders": 30
        },
        {
            "quarter": "2021 Q3",
            "onlineOrders": 100,
            "offlineOrders": 100
        },
        {
            "quarter": "2021 Q2",
            "onlineOrders": 99,
            "offlineOrders": 92
        }
    ]

    const calculateTotalOrders = (data) => {
        const totalOrders = []
        data.forEach(obj => {
            totalOrders.push(obj.onlineOrders + obj.offlineOrders)
        })
        return totalOrders.reverse()
    }

    const calculateOnlineComposition = (data) => {
        const onlineComposition = []
        data.forEach(obj => {
            const totalOrders = obj.onlineOrders + obj.offlineOrders
            onlineComposition.push(parseInt((obj.onlineOrders / totalOrders * 100).toFixed(1), 10))
        })
        return onlineComposition.reverse()
    }

    const [isActive, setIsActive] = useState([1, 0, 0, 0, 0, 0])
    const [currData, setCurrData] = useState(SHData)
    const [chartData, setChartData] = useState([calculateTotalOrders(currData), calculateOnlineComposition(currData)])

    const updateState = (data, action) => {
        if (action === 'add') {
            for (let i = 0; i < currData.length; i++) {
                currData[i].onlineOrders += data[i].onlineOrders
                currData[i].offlineOrders += data[i].offlineOrders
            }
        }
        if (action === 'subtract') {
            for (let i = 0; i < currData.length; i++) {
                currData[i].onlineOrders -= data[i].onlineOrders
                currData[i].offlineOrders -= data[i].offlineOrders
            }
        }
        setCurrData(currData)
        setChartData([calculateTotalOrders(currData), calculateOnlineComposition(currData)])
    }

    const handleClick = (data, index) => {
        if (isActive[index] === 1) {
            updateState(data, 'subtract')
            isActive[index] = 0
            setIsActive(isActive)
        } else {
            updateState(data, 'add')
            isActive[index] = 1
            setIsActive(isActive)
        }
    }

    const orders_data = {
        labels: ['Q2 2021', 'Q3 2021', 'Q4 2021', 'Q1 2022'],
        datasets: [
            {
                label: "Total Orders",
                backgroundColor: '#043776',
                borderColor: '#043776',
                data: chartData[0],     
                type: "bar",
                yAxisID: 'y',
                order: 2,
                // tooltip: {
                //     callbacks: {
                //         label: (context) => {
                //             return `${context.dataset.label}: ${context.raw}K`
                //         }
                //     }
                // }
            },
            {
                label: "Online Orders (ECP + CSC)",
                backgroundColor: '#A1A1A4',
                borderColor: '#A1A1A4',
                data: chartData[1],
                type: 'line',
                yAxisID: 'percentage',
                order: 1,
                borderWidth: 5,
                tooltip: {
                    callbacks: {
                        label: (context) => {
                            return `${context.dataset.label}: ${context.raw}%`
                        }
                    }
            }
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
            datalabels: {
                labels: {
                    title: null
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
                type: 'linear',
                position: 'left',
                // ticks: {
                //     callback: (value, index, values) => {
                //         return `${value}K`
                //     }
                // },
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