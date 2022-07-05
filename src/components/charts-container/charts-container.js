import React, { useState, useEffect } from "react";
import * as styles from "./charts-container.module.css"
import axios from 'axios'
import MetricTitle from "../metric-title/metric-title";
import OrderCard from "../order-card/order-card"
import ComboChart from "../combo-chart/combo-chart"

import data from "../../dummy-data/orders-data"

const ChartsContainer = ({ quarter }) => {

    const [totalOrdersData, setTotalOrdersData] = useState(data.totalOrders)
    const [cancelledOrdersData, setCancelledOrdersData] = useState(data.cancelledOrders)

    // useEffect(() => {
    //     axios.get(`${process.env.GATSBY_TOTAL_ORDERS_API_URL}`)
    //         .then(response => response.data)
    //         .then(json => setTotalOrdersData(json.data))
    // }, [])

    // set all headers here
    const headersObj = {
        'API_KEY': `${process.env.API_KEY}`
    }

    // testing API
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1', {'headers': headersObj})
            .then(response => response.data)
            .then(resp => console.log(resp))
    }, [])

    return (
        <section className={styles.ordersCardContainer}>

            <div className={styles.ordersMetricCardA}>
                <MetricTitle title="Orders By Channel" />
                <OrderCard ordersDataObj={totalOrdersData[quarter]} />
            </div>

            <div className={styles.ordersMetricCardB}>
                <MetricTitle title="Cancelled Orders By Channel" />
                <OrderCard ordersDataObj={cancelledOrdersData[quarter]} />
            </div>
            
            <div className={styles.ordersGridContainer}>
                <MetricTitle title="Orders By Category" />
                <div className={styles.ordersCharts}>
                    <ComboChart />
                </div> {/* end of orders charts */}
            </div> {/* end of grid container */}

        </section>
    )

} // end of function

export default ChartsContainer