import React from 'react';
import './AnswersComponent.css';

const AnswerComponent = (props) => {

	return (
		<div>
			<a className={props.active === props.answer.id ? "answerTextActive" : "answerText"} onClick={() => props.setActive(props.answer.id)}>{props.answer.id}. {props.answer.answerText} </a>
		</div>
	);
};

export default AnswerComponent;