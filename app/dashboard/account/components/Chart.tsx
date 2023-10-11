"use client"
import React from "react";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

export default function Chart() {
	const labels = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	ChartJS.register(
		CategoryScale,
		LinearScale,
		BarElement,
		Title,
		Tooltip,
	
	);

	const options = {
		responsive: true,
	};

	const data = {
		labels,
		datasets: [
			{
				label: "Dataset 1",
				data: [0, 0, 0, 0, 0, 150, 0, 0, 0, 0, 0, 0],
				backgroundColor: "#EC2227"			}
		],
	};
	return <Bar options={options} data={data} />;
}
