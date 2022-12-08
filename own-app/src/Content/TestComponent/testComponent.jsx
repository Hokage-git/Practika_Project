import React, {useState} from 'react';
import './test.css';
import AnswersSection from "./answersSection";


const tests =
	[
		{
			id: 1,
			questionText:"Год основания Parma Technologies Group",
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
		}
	]

const TestComponent = () => {
	const [isStart,setIsStart] = useState(true)
	const [i,setI] = useState(0)
	const count = Object.keys(tests);

	function TestStart(){
		setIsStart(false)
		if(i > count){
			window.location.assign("http://localhost:3000/home")
		}
		else{
			setI(i+1)
		}
		console.log(i);
	}

	return (
		<div className={"test__container"}>
			<h1>{isStart ? "Входной тест": "Вопрос №"+i}</h1>
			<div className={isStart ? "description" : "description_Non_Vis"}>
				Этот тест направлен на получение первого опыта взаимодействия с сайтом
			</div>
			<div className={isStart ? "NotShow" : "Show"}>
				{tests.map((test)=>
					<AnswersSection test={test} active={isStart} setActive={setIsStart} key = {test.id}/>
				)}
			</div>
			<button className={"reg__btn"} onClick={TestStart}>{isStart?"Старт":"Далее"}</button>
		</div>
	);
};

export default TestComponent;