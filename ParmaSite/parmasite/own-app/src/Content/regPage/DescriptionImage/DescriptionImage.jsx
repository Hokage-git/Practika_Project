import React, {useState} from 'react';
import './DescriptionImage.css';

const DescriptionImage = (props) => {
	const [color,setColor] = useState("#" + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase());
	return (
		<div className={"block"}>
			<div className={"front__block"}>
				<img src ={props.test.frontImgSrc}/>
			</div>
			<div className={"back__block"} style={{backgroundColor: color}}>
				{props.test.backText}
			</div>
		</div>
	);
};

export default DescriptionImage;