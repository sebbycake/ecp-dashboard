import React, { useState, useEffect } from "react";
import * as styles from "./charts-container.module.css"
import axios from 'axios'
import MetricTitle from "../metric-title/metric-title";
import OrderCard from "../order-card/order-card"
import ComboChart from "../combo-chart/combo-chart"

import { useTotalOrdersQuery, useCancelledOrdersQuery, useTestQuery } from "../../queries"

const ChartsContainer = ({ quarter }) => {

    const { status: totalOrdersStatus, data: totalOrdersData } = useTotalOrdersQuery()
    const { status: cancelledOrdersStatus, data: cancelledOrdersData } = useCancelledOrdersQuery()
    const { data: testData } = useTestQuery()

    return (
        <section className={styles.ordersCardContainer}>

            <div className={styles.ordersMetricCardA}>
                <MetricTitle title="Orders By Channel" />
                <OrderCard status={totalOrdersStatus} data={totalOrdersData} quarter={quarter} />
            </div>

            <div className={styles.ordersMetricCardB}>
                <MetricTitle title="Cancelled Orders By Channel" />
                <OrderCard  status={cancelledOrdersStatus} data={cancelledOrdersData} quarter={quarter}/>
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