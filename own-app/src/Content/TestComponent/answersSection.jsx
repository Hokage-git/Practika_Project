import React, {useState} from 'react';
import "./answerSection.css"
import AnswerComponent from "./AnswerComponent";

const AnswersSection = (props) => {
	const [active,setActive] = useState(0);
	return (
		<div>
			<div className={"question"}>{props.test.questionText}</div>
			<div className={"answer"}>
			{props.test.answers.map((answer) =>
				<AnswerComponent answer = {answer} active = {active} setActive = {setActive}/>
			)}
			</div>
		</div>
	);
};

export default AnswersSection;