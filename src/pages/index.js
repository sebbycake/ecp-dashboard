import * as React from "react"
import Header from "../components/header/header"
import MetricCard from "../components/metric-card/metric-card"
import OrderCard from "../components/order-card/order-card"
import SelectorBtn from "../components/selector-btn/selector-btn"

// styles


// data from API
const metricsData = [
  {
    name: "Users",
    number: 580,
    growth_rate: 0.25
  },
  {
    name: "2-way Comms",
    number: 300,
    growth_rate: 0.15
  },
  {
    name: "Reports",
    number: 250,
    growth_rate: 0.07
  },
  {
    name: "Invoices",
    number: 600,
    growth_rate: 0.05
  },
  {
    name: "Notifications",
    number: 105,
    growth_rate: -0.10
  }
]

const metricCardList = metricsData.map(metric => <MetricCard metric={metric} />)

const total_order_card = {
  canvas_id: "total-orders-pie-chart",
  totalOrders: "9,000",
  onlineOrders: "8,000",
  offlineOrders: "1,000"
}

const cancelled_order_card = {
  canvas_id: "cancelled-orders-pie-chart",
  totalOrders: "5,000",
  onlineOrders: "4,000",
  offlineOrders: "1,000"
}

// markup
const IndexPage = () => {
  return (
    <main>

      <Header />

      <div className="metrics-grid">
        {metricCardList}
      </div>

      <OrderCard order_card={total_order_card} />
      <OrderCard order_card={cancelled_order_card} />

    </main>
  )
}

export default IndexPage
