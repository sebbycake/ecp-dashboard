import React from "react";
import userIcon from "../images/icons/user.png"
import caretUpIcon from "../images/icons/caret-arrow-up.png"
import caretDownIcon from "../images/icons/caret-arrow-down.png"

const MetricCard = ({ metric }) => {

    const metricCardStyles = {
        backgroundColor: "var(--container-color)",
        height: "184px",
        borderRadius: "var(--container-border-radius)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly"
    }

    const metricIconContainerStyles = {
        marginLeft: "30px",
        display: "flex",
        alignItems: "center"
    }

    const iconContainerStyles = {
        backgroundColor: "rgba(20, 121, 255, 0.1)",
        borderRadius: "10px",
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    const metricIconNameStyles = {
        color: "var(--title-color)",
        fontSize: "16px",
        fontWeight: 700,
        marginLeft: "6px"
    }

    const metricDetailsContainerStyles = {
        marginLeft: "30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end"
    }

    const metricNumberStyles = {
        fontSize: "50px",
        fontWeight: 700,
        color: "var(--first-color)"
    }

    const metricGrowthContainerStyles = {
        display: "flex",
        marginRight: "24px",
        verticalAlign: "bottom"
    }

    const metricGrowthRateStyles = {
        color: "var(--title-color)",
        fontWeight: 700,
        marginLeft: "4px",
        marginTop: "2px"
    }

    const userIconStyles = {
        width: "24px"
    }

    const caretUpIconStyles = {
        width: "24px"
    }

    return (
        <div style={metricCardStyles}>
            <div style={metricIconContainerStyles}>
                <div style={iconContainerStyles}>
                    <img style={userIconStyles} src={userIcon} alt="" />
                </div>
                <div style={metricIconNameStyles}>{metric.name}</div>
            </div>
            <div style={metricDetailsContainerStyles}>
                <div style={metricNumberStyles}>{metric.number}</div>
                <div style={metricGrowthContainerStyles}>
                    <div>
                        <img style={caretUpIconStyles} src={metric.growth_rate > 0 ? caretUpIcon : caretDownIcon} alt="" />
                    </div>
                    <div style={metricGrowthRateStyles}>{`${Math.abs(Math.round(metric.growth_rate * 100))}%`}</div>
                </div>
            </div>
        </div>
    )

} // end of function

export default MetricCard