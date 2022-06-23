import React from "react"
import equinix_logo from "../images/equinix_logo.png"
import down_arrow from "../images/icons/down-arrow.png"

const Header = () => {

    const headerStyles = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexShrink: 0
    }

    const logoStyles = {
        width: "180px"
    }

    const dropdownBtnStyles = {
        width: "100px",
        padding: "6px 20px",
        border: "none",
        borderRadius: "6px",
        backgroundColor: "var(--container-color)",
        border: "2px solid var(--first-color)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer"
    }

    const btnTextStyles = {
        color: "var(--first-color)",
        fontWeight: 600
    }

    const downArrowIconStyles = {
        width: "32px"
    }

    return (
        <div style={headerStyles}>
            <div>
                <img style={logoStyles} src={equinix_logo} alt="Equinix Logo" />
            </div>
            <div style={dropdownBtnStyles}>
                <div style={btnTextStyles}>Q1 2022</div>
                <img style={downArrowIconStyles} src={down_arrow} alt="Down Arrow Icon" />
            </div>
        </div>
    )

} // end of function

export default Header