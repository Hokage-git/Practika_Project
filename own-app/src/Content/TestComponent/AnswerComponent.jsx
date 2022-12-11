import React, {useState} from 'react';
import './AnswersComponent.css';

const AnswerComponent = (props) => {
	const [partActive,setPartActive] = useState(false);
	if (props.isPart === true){
	return (
		<div>
			<a className={(partActive ? "answerTextActive" : "answerText")}
			   onClick={() => (setPartActive(!partActive))}>
				{props.answer.id}. {props.answer.answerText}
			</a>
		</div>
	);
	}
	else{
		return(
			<div>
				<a className={props.active === props.answer.id ? "answerTextActive" : "answerText"}
				   onClick={() => props.setActive(props.answer.id)}>
					{props.answer.id}. {props.answer.answerText}
				</a>
			</div>
		);
	}
};

export default AnswerComponent;