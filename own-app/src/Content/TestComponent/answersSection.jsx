import React, {useState} from 'react';
import "./answerSection.css"
import AnswerComponent from "./AnswerComponent";

const AnswersSection = (props) => {
	const [active,setActive] = useState(0);
	return (
		<div>
			<div className={"question"}>{props.test.questionText}</div>
			<img className={props.test.ImageUrl.length === 0 ? "quest__imgNotActive" : "quest__img"} src={props.test.ImageUrl}/>
			<div className={"answer"}>
			{props.test.answers.map((answer) =>
				<AnswerComponent answer = {answer} isPart = {props.test.IsPart} active = {active} setActive = {setActive}/>
			)}
			</div>
		</div>
	);
};

export default AnswersSection;