import React from "react";
import * as styles from "./order-card.module.css"

const OrderCard = ({order_card}) => {

    return (
        <div className={styles.ordersMetricCard}>
            <div className={styles.ordersPieChart}>
                <canvas id={order_card.canvas_id}></canvas>
            </div>
            <div>
                <div>{order_card.totalOrders}</div>
                <div>{`Online: ${order_card.onlineOrders}`}</div>
                <div>{`Offline: ${order_card.offlineOrders}`}</div>
            </div>
        </div>
    )

} // end of function

export default OrderCard