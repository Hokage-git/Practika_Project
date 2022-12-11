import React, {useState} from 'react';
import './test.css';
import AnswersSection from "./answersSection";
import ImageToQuest from "./4gBxU-wDPt0.jpg";
import ParmaTeam from "../unregPage/LogInWindow/ParmaTeam.jpg"

const tests =
	[
		{
			id: 1,
			questionText:"Год основания Parma Technologies Group",
			ImageUrl: "",
			IsPart: false,
			answers: [{
				id:1,
				answerText:"2000г.",
				answerTrue:false
			},
			{
				id:2,
				answerText:"1991г.",
				answerTrue:false
			},
			{
				id:3,
				answerText:"2016г.",
				answerTrue:true
			},
			{
				id:4,
				answerText:"2020г.",
				answerTrue:false
			}]
		},
		{
			id: 2,
			questionText:"Какие объекты изображены на фото?",
			ImageUrl: ImageToQuest,
			IsPart: true,
			answers: [{
				id:1,
				answerText:"Кофемашина",
				answerTrue:false
			},
				{
					id:2,
					answerText:"Логотип Parma",
					answerTrue:true
				},
				{
					id:3,
					answerText:"Вазочка с Конфетками",
					answerTrue:true
				},
				{
					id:4,
					answerText:"Несчастливые люди",
					answerTrue:false
				}]
		}
	]

const TestComponent = () => {
	const [isStart,setIsStart] = useState(true)
	const [i,setI] = useState(0)
	const count = Object.keys(tests).length;
	const [test,setTest] = useState(tests.find(item => {return item.id-1 === i}));

	function TestStart(){
		setIsStart(false)

		if(i > count-1){
			window.location.assign("http://localhost:3000/home")
		}
		else{
			setI(i+1)
			setTest(tests.find(item => {return item.id-1 === i}))
		}
	}

	return (
		<div className={"test__container"}>
			<h1>{isStart ? "Входной тест": "Вопрос №"+i}</h1>
			<div className={isStart ? "description" : "description_Non_Vis"}>
				Этот тест направлен на получение первого опыта взаимодействия с сайтом
				<img src={ParmaTeam}/>
			</div>
			<div className={isStart ? "NotShow" : "Show"}>
					<AnswersSection test={test} key={test.id} active={isStart} setActive={setIsStart}/>
			</div>
			<button className={"reg__btn"} onClick={TestStart}>{isStart?"Старт":"Далее"}</button>
		</div>
	);
};

export default TestComponent;