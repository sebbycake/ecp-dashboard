import React from "react";
import * as styles from "./selector-btn.module.css"

const SelectorBtn = ({btnText}) => {

    return (
        <div>
            <button className={styles.selectorBtn}>{btnText}</button>
        </div>
    )

} // end of function

export default SelectorBtn