import React, {useState} from 'react';
import './StatsPage.css';
import {Bar} from "react-chartjs-2";
import {Pie} from "react-chartjs-2";
import auto, {Chart} from "chart.js/auto";

const StatsPage = () => {
	const barChartData = {
		labels: ['План','Результат'],
		datasets: [
			{
				data: [50,20],
				label: ">80%",
				backgroundColor: 'rgba(84,149,204,0.6)',
				borderColor: 'rgba(84,149,204)',
				borderWidth: 1.5,
				fill: true
			},
			{
				data: [20,40],
				label: "60%-80%",
				backgroundColor: 'rgba(149,216,203,0.6)',
				borderColor: 'rgba(149,216,203)',
				borderWidth: 1.5,
				fill: true
			},
			{
				data: [15,30],
				label: "60%-40%",
				backgroundColor: 'rgba(255,208,134,0.6)',
				borderColor: 'rgba(255,208,134)',
				borderWidth: 1.5,
				fill: true
			},
			{
				data: [15,10],
				label: "<40%",
				backgroundColor: 'rgba(255,102,102,0.6)',
				borderColor: 'rgba(255,102,102)',
				borderWidth: 1.5,
				fill: true
			}
		]
	};

	const pieChartData = {
		labels: ["Тестировщики","Писатели","Программисты","Маркетологи"],
		datasets: [{
			data: [70, 30, 50,50],
			label: "Infected People",
			backgroundColor: ['rgba(84,149,204)', 'rgba(255,102,102)','rgba(255,208,134)','rgba(149,216,203)'],
		}]
	};



	return (
		<div>
			<div className={"stats__container"}>
				<div className={"percent__stat"}>
					Успешность прохождения
					<Bar
						type={"bar"}
						data={barChartData}
						width={500}
						height={500}
						options={{
							maintainAspectRatio: false,
							y: { suggestedMin: 0,
								suggestedMax: 100}
					}}
					/>
				</div>
				<div className={"percent__depart__stat"}>
					Успешность прохожденния в подразделениях
					<Pie
						type={'pie'}
						data={pieChartData}
						width={500}
						height={500}
					/>
				</div>
			</div>
			<button className={"download__btn"}> Скачать </button>
		</div>
	);
};

export default StatsPage;