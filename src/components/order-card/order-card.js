import React from "react";
import * as styles from "./order-card.module.css"

const OrderCard = ({order_card, chart}) => {

    return (
        <div className={styles.ordersMetricCard}>
            <div className={styles.ordersPieChart}>
                {chart}
            </div>
            <div>
                <div className={styles.totalOrders}>{order_card.totalOrders}</div>
                <div>{`Online: ${order_card.onlineOrders}`}</div>
                <div>{`Offline: ${order_card.offlineOrders}`}</div>
            </div>
        </div>
    )

} // end of function

export default OrderCard