import React from "react";

const OrderCard = ({order_card}) => {

    const ordersMetricCardStyles = {
        backgroundColor: "var(--container-color)",
        borderRadius: "var(--container-border-radius)",
        height: "284px",
        marginTop: "4px",
        display: "flex",
        alignItems: "center"
    }

    const ordersPieChartStyles = {
        width: "16vw"
    }

    const ordersStatsStyles = {

    }

    const metricNumberStyles = {
        
    }

    const metricNumberOnlineStyles = {
        
    }

    const metricNumberOfflineStyles = {
        
    }

    return (
        <div style={ordersMetricCardStyles}>
            <div style={ordersPieChartStyles}>
                <canvas id={order_card.canvas_id}></canvas>
            </div>
            <div style={ordersStatsStyles}>
                <div style={metricNumberStyles}>{order_card.totalOrders}</div>
                <div style={metricNumberOnlineStyles}>{`Online: ${order_card.onlineOrders}`}</div>
                <div style={metricNumberOfflineStyles}>{`Offline: ${order_card.offlineOrders}`}</div>
            </div>
        </div>
    )

} // end of function

export default OrderCard