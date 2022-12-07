import React, {useState} from 'react';
import './DescriptionImage.css';

const DescriptionImage = (props) => {
	const [color,setColor] = useState("#" + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase());
	return (
		<div className={"block"} onClick={() => window.location.assign("http://localhost:3000/test")}>
			<div className={"front__block"}>
				<img src ={props.test.frontImgSrc}/>
			</div>
			<div className={"back__block"} style={{backgroundColor: color}}>
				<div>
				{props.test.backText}
				</div>
			</div>
		</div>
	);
};

export default DescriptionImage;