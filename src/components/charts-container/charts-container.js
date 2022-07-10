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

    const fetchData = () => {

        const totalOrdersAPI = process.env.GATSBY_TOTAL_ORDERS_API_URL
        const cancelledOrdersAPI = process.env.GATSBY_CANCELLED_ORDERS_API_URL

        const getTotalOrders = axios.get(totalOrdersAPI)
        const getCancelledOrders = axios.get(cancelledOrdersAPI)

        axios.all([getTotalOrders, getCancelledOrders])
            .then(axios.spread((...allData) => {
                setTotalOrdersData(allData[0].data)
                setCancelledOrdersData(allData[1].data)
            })
            )
    }

    // useEffect(() => {
    //     fetchData()
    // }, [])

    // set all headers here
    const headersObj = {
        "mode": "cors",
        "X-AUTH-APIKEY": "QsA5LABFfDo3IEQIOJ80QiLe7T6NVvES",
        "X-AUTH-USER-NAME": "eqorgadmin",
        "X-CORRELATION-ID": "1111111",
        "X-SESSION-ID": "1111111",
        "X-AUTH-ORG-ID": "10021", // newly added field
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
        "Accept, Accept-Language, Content-Language, Content-Type, X-AUTH-USER-NAME, X-AUTH-ORG-ID, X-CORRELATION-ID, X-SESSION-ID",
      };

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