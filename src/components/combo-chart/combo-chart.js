import React, { useState } from "react";
import * as styles from "./combo-chart.module.css"
import axios from 'axios'

import { Chart } from "react-chartjs-2"
import { Chart as ChartJS, registerables } from 'chart.js';

import data from '../../dummy-data/charts-data'

ChartJS.register(...registerables)

const ComboChart = () => {

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

    const [smartHands, setSmartHands] = useState(data.smartHands)
    const [crossConnect, setCrossConnect] = useState(data.crossConnect)
    const [fabricPort,  setFabricPort] = useState(data.fabricPort)
    const [equinixConnect, setEquinixConnect] = useState(data.equinixConnect)
    const [internetExchange, setInternetExchange] = useState(data.internetExchange)
    const [metroConnect, setMetroConnect] = useState(data.metroConnect)

    const [isActive, setIsActive] = useState([1, 0, 0, 0, 0, 0])
    const [currData, setCurrData] = useState(smartHands)
    const [chartData, setChartData] = useState([calculateTotalOrders(currData), calculateOnlineComposition(currData)])
    
    const fetchData = () => {

        const getSmartHands = axios.get(`${process.env.GATSBY_SMART_HANDS_ORDERS_API_URL}`)
        const getCrossConnect = axios.get(`${process.env.CROSS_CONNECT_ORDERS_API_URL}`)
        const getFabricPort = axios.get(`${process.env.GATSBY_FABRIC_PORT_ORDERS_API_URL}`)
        const getEquinixConnect = axios.get(`${process.env.GATSBY_EQUINIX_CONNECT_API_URL}`)
        const getInternetExchange = axios.get(`${process.env.GATSBY_INTERNET_EXCHANGE_API_URL}`)
        const getMetroConnect = axios.get(`${process.env.GATSBY_METRO_CONNECT_API_URL}`)

        axios.all([getSmartHands, getCrossConnect, getFabricPort, getEquinixConnect, getInternetExchange, getMetroConnect])
            .then(axios.spread((...allData) => {
                setSmartHands(allData[0].data)
                setCrossConnect(allData[1].data)
                setFabricPort(allData[2].data)
                setEquinixConnect(allData[3].data)
                setInternetExchange(allData[4].data)
                setMetroConnect(allData[5].data)
            })
            )
    }

    // useEffect(() => {
    //     fetchData()
    // }, [])

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
            <button className={`${styles.selectorBtn} ${isActive[0] === 1 && styles.active}`} onClick={() => handleClick(smartHands, 0)}>Smart Hands</button>
            <button className={`${styles.selectorBtn} ${isActive[1] === 1 && styles.active}`} onClick={() => handleClick(crossConnect, 1)}>Cross Connect</button>
            <button className={`${styles.selectorBtn} ${isActive[2] === 1 && styles.active}`} onClick={() => handleClick(fabricPort, 2)}>Fabric Port</button>
            <button className={`${styles.selectorBtn} ${isActive[3] === 1 && styles.active}`} onClick={() => handleClick(equinixConnect, 3)}>Equinix Connect</button>
            <button className={`${styles.selectorBtn} ${isActive[4] === 1 && styles.active}`} onClick={() => handleClick(internetExchange, 4)}>Internet Exchange</button>
            <button className={`${styles.selectorBtn} ${isActive[5] === 1 && styles.active}`} onClick={() => handleClick(metroConnect, 5)}>Metro Connect</button>
            <div className={styles.ordersComboChart}>
                <Chart type="line" data={orders_data} options={combo_chart_config} />
            </div>
        </div>
    )
    
}

export default ComboChart