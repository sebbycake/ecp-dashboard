import React, { useState, useEffect } from "react";
import equinix_logo from "../../images/equinix_logo.png";
import * as styles from "./header.module.css";

import Loader from "../loader/loader";

import { useTotalOrdersQuery, useCancelledOrdersQuery } from "../../queries";

const Header = ({ setQuarter }) => {
	const { status, data: listOfQuarters } = useTotalOrdersQuery();

	const handleChange = (e) => {
		setQuarter(e.target.value);
	};

	return (
		<div>
			<div className={styles.header}>
				<div>
					<img className={styles.logo} src={equinix_logo} alt="Equinix Logo" />
				</div>
				<select className={styles.dropdownBtn} onChange={handleChange}>
					{status === "loading" ? (
						<option className={styles.options}>Loading...</option>
					) : status === "error" ? (
						<option className={styles.options}>Error</option>
					) : (
						<div>
							<option className={styles.options} value="0">
								{listOfQuarters.data.data[0].quarter}
							</option>
							<option className={styles.options} value="1">
								{listOfQuarters.data.data[1].quarter}
							</option>
							<option className={styles.options} value="2">
								{listOfQuarters.data.data[2].quarter}
							</option>
							<option className={styles.options} value="3">
								{listOfQuarters.data.data[3].quarter}
							</option>
						</div>
					)}
				</select>
			</div>
		</div>
	);
}; // end of function

export default Header;
