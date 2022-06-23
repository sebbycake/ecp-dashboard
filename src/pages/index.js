import * as React from "react"
import Header from "../components/header"
import MetricCard from "../components/metric-card"

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

// markup
const IndexPage = () => {
  return (
    <main>

      <Header />

      <div className="metrics-grid">
        {metricCardList}
      </div>

    </main>
  )
}

export default IndexPage
