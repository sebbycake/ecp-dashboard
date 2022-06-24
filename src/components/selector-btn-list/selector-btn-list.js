import React from "react";
import SelectorBtn from "../selector-btn/selector-btn";
import * as styles from "./selector-btn-list.module.css"

const SelectorBtnList = () => {

    return (
        <div className={styles.selectorBtnContainer}>
            <SelectorBtn btnText="Smart Hands" />
            <SelectorBtn btnText="Cross Connect" />
            <SelectorBtn btnText="Fabric Port" />
            <SelectorBtn btnText="Equinix Connect" />
            <SelectorBtn btnText="Internet Exchange" />
            <SelectorBtn btnText="Metro Connect" />
        </div>
    )

} // end of function

export default SelectorBtnList