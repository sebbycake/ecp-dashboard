import React from 'react'
import MetricCardList from "../metric-card-list/metric-card-list"
import ChartsContainer from "../charts-container/charts-container"

const StateContainer = ({ quarter }) => {
    return (
        <div>   
            <MetricCardList quarter={quarter}/>
            <ChartsContainer quarter={quarter}/>
        </div>
    )
}

export default StateContainer