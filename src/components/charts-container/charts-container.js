import React, { useState, useEffect } from "react";
import * as styles from "./charts-container.module.css"
import axios from 'axios'
import MetricTitle from "../metric-title/metric-title";
import OrderCard from "../order-card/order-card"
import ComboChart from "../combo-chart/combo-chart"

const ChartsContainer = () => {

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
            "orderYear": "2022",
            "orderQuarter": "1",
            "numOforders": 2584,
            "composition": {
                "online": 0.11,
                "offline": 0.89
            }
        },
        {
            "orderYear": "2021",
            "orderQuarter": "4",
            "numOforders": 502,
            "composition": {
                "online": 0.28,
                "offline": 0.71
            }
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
                <OrderCard ordersDataObj={mock_orders_json_response[0]} />
            </div>

            <div className={styles.ordersMetricCardB}>
                <MetricTitle title="Cancelled Orders By Channel" />
                <OrderCard ordersDataObj={mock_orders_json_response[1]} />
            </div>

        </section>
    )

} // end of function

export default ChartsContainer