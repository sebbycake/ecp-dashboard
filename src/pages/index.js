import React, { useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";

import Header from "../components/header/header";
import MetricCardList from "../components/metric-card-list/metric-card-list";
import ChartsContainer from "../components/charts-container/charts-container";
import { Helmet } from "react-helmet";
import favicon from "../images/icons/favicon.ico";

// markup
const IndexPage = () => {
	const [quarter, setQuarter] = useState(0);

	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<Helmet>
				<meta charSet="utf-8" />
				<title>ECP Adoption Dashboard</title>
				<link rel="icon" href={favicon} />
			</Helmet>

			<Header setQuarter={setQuarter} />

			<MetricCardList quarter={quarter} />

			<ChartsContainer quarter={quarter} />
		</QueryClientProvider>
	);
};

export default IndexPage;
