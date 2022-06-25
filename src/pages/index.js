import * as React from "react"

// charts components import
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS , registerables } from 'chart.js'

// local components import
import Header from "../components/header/header"
import MetricCardList from "../components/metric-card-list/metric-card-list"
import OrderCard from "../components/order-card/order-card"
import MetricTitle from "../components/metric-title/metric-title"
import SelectorBtnList from "../components/selector-btn-list/selector-btn-list"

ChartJS.register(...registerables)

// data from API

const metricsData = [
  {stats: 580, growth_rate: 0.25},
  {stats: 300, growth_rate: 0.15},
  {stats: 250, growth_rate: 0.07},
  {stats: 600, growth_rate: 0.05},
  {stats: 105, growth_rate: -0.10},
]

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

// pie chart
const orders_data = {
  labels: [
      'Online',
      'Offline',
  ],
  datasets: [{
      data: [65, 35],
      backgroundColor: [
          '#043776',
          '#53B7E8',
      ],
      hoverOffset: 4
  }]
};

const pie_chart_options = {
    responsive: true,
    aspectRatio: 1.2,
    maintainAspectRatio: true,
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                boxWidth: 12,
                boxHeight: 12
            }
        }
    },
}


// -------------------------------

const specific_order_data = {
  labels: ['Q2 2021', 'Q3 2021', 'Q4 2021', 'Q1 2022'],
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [73, 75, 74, 77],
  }]
};

// markup
const IndexPage = () => {
  return (
    <main>

      <Header />

      <MetricTitle title="Quarterly Overview" />

      <MetricCardList data={metricsData}/>

      <section className="orders-card-container">

        <div className="orders-grid-container">
          <MetricTitle title="Online Orders By Category" />
          <div className="orders-charts">
            <SelectorBtnList />
            <div class="orders-charts-container">
              <div class="orders-combo-chart">
                {/* <canvas id="online-orders-combo-chart"></canvas> */}
                <Chart type="line" data={specific_order_data} />
              </div>
            </div>
          </div> {/* end of orders charts */}
        </div> {/* end of grid container */}

        <div class="orders-metric-card-a">
          <MetricTitle title="Orders By Channel" />
          <OrderCard order_card={total_order_card} chart={<Chart type="pie" data={orders_data} options={pie_chart_options} />} />
        </div>


        <div class="orders-metric-card-b">
          <MetricTitle title="Cancelled Orders By Channel" />
          <OrderCard order_card={cancelled_order_card} chart={<Chart type="pie" data={orders_data} options={pie_chart_options} />} />
        </div>

      </section>

    </main>
  )
}

export default IndexPage
