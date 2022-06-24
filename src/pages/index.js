import * as React from "react"
import Header from "../components/header/header"
import MetricCard from "../components/metric-card/metric-card"
import OrderCard from "../components/order-card/order-card"
import MetricTitle from "../components/metric-title/metric-title"
import SelectorBtnList from "../components/selector-btn-list/selector-btn-list"

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

      <MetricTitle title="Quarterly Overview" />

      <div className="metrics-grid">
        {metricCardList}
      </div>

      <section className="orders-card-container">

        <div className="orders-grid-container">
          <MetricTitle title="Online Orders By Category" />
          <div className="orders-charts">
            <SelectorBtnList />
            <div class="orders-charts-container">
              <div class="orders-combo-chart">
                <canvas id="online-orders-combo-chart"></canvas>
              </div>
            </div>
          </div> {/* end of orders charts */}
        </div> {/* end of grid container */}

        <div class="orders-metric-card-a">
          <MetricTitle title="Orders By Channel" />
          <OrderCard order_card={total_order_card} />
        </div>


        <div class="orders-metric-card-b">
          <MetricTitle title="Cancelled Orders By Channel" />
          <OrderCard order_card={cancelled_order_card} />
        </div>

      </section>

    </main>
  )
}

export default IndexPage
