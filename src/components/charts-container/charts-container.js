import React, { useState, useEffect } from "react";
import * as styles from "./charts-container.module.css"
import axios from 'axios'
import MetricTitle from "../metric-title/metric-title";
import OrderCard from "../order-card/order-card"
import ComboChart from "../combo-chart/combo-chart"

const ChartsContainer = ({ quarter }) => {

    // const [totalOrdersData, setTotalOrdersData] = useState([])
    // const [cancelledOrdersData, setCancelledOrdersData] = useState([])

    // useEffect(() => {
    //     axios.get('API_URL')
    //         .then(response => response.data)
    //         .then(json => setTotalOrdersData(json.data))
    // }, [])

    // set all headers here
    const headersObj = {
        'Test-Header1': 'test-value',
        'Test-Header2': 'test-value',
        'Test-Header3': 'test-value',
    }

    // testing API
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1', {'headers': headersObj})
            .then(response => response.data)
            .then(resp => console.log(resp))
    }, [])

    const mock_orders_json_response = [
        {
            "quarter": "2022 Q1",
            "onlineOrders": 4000,
            "offlineOrders": 1000
        },
        {
            "quarter": "2021 Q4",
            "onlineOrders": 3800,
            "offlineOrders": 983
        },
        {
            "quarter": "2021 Q3",
            "onlineOrders": 3530,
            "offlineOrders": 880
        },
        {
            "quarter": "2021 Q2",
            "onlineOrders": 3400,
            "offlineOrders": 777
        },
    ]

    const mock_cancelled_orders_json_response = [
        {
            "quarter": "2022 Q1",
            "onlineOrders": 200,
            "offlineOrders": 100
        },
        {
            "quarter": "2021 Q4",
            "onlineOrders": 80,
            "offlineOrders": 30
        },
        {
            "quarter": "2021 Q3",
            "onlineOrders": 79,
            "offlineOrders": 44
        },
        {
            "quarter": "2021 Q2",
            "onlineOrders": 233,
            "offlineOrders": 111
        },
    ]

    return (
        <section className={styles.ordersCardContainer}>

            <div className={styles.ordersGridContainer}>
                <MetricTitle title="Orders By Category" />
                <div className={styles.ordersCharts}>
                    <ComboChart />
                </div> {/* end of orders charts */}
            </div> {/* end of grid container */}

            <div className={styles.ordersMetricCardA}>
                <MetricTitle title="Orders By Channel" />
                <OrderCard ordersDataObj={mock_orders_json_response[quarter]} />
            </div>

            <div className={styles.ordersMetricCardB}>
                <MetricTitle title="Cancelled Orders By Channel" />
                <OrderCard ordersDataObj={mock_cancelled_orders_json_response[quarter]} />
            </div>

        </section>
    )

} // end of function

export default ChartsContainer