import React, { useState, useEffect } from "react";
import * as styles from "./charts-container.module.css"
import axios from 'axios'
import MetricTitle from "../metric-title/metric-title";
import OrderCard from "../order-card/order-card"
import ComboChart from "../combo-chart/combo-chart"

import data from "../../dummy-data/orders-data"

import { useTotalOrdersQuery, useCancelledOrdersQuery, useTestQuery } from "../../queries"

const ChartsContainer = ({ quarter }) => {

    const { data: totalOrdersData } = useTotalOrdersQuery()
    const { data: cancelledOrdersData } = useCancelledOrdersQuery()
    const { data: testData } = useTestQuery()

    return (
        <section className={styles.ordersCardContainer}>

            <div className={styles.ordersMetricCardA}>
                <MetricTitle title="Orders By Channel" />
                {/* <OrderCard ordersDataObj={totalOrdersData.data.data[quarter]} /> */}
            </div>

            <div className={styles.ordersMetricCardB}>
                <MetricTitle title="Cancelled Orders By Channel" />
                {/* <OrderCard ordersDataObj={cancelledOrdersData.data.data[quarter]} /> */}
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