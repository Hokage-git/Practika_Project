import React from 'react';
import logo from "../ParmaLogo.svg";
import TestComponent from "../Content/Test/testComponent";


const Test = () => {

	return (
		<div>
			<div className={"container"}>
				<div className = "header">
					<img src={logo} className = "Parma__Logo" alt="logo"/>
					<a className= "Worker__info" onClick={()=>window.location.assign('http://localhost:3000/')}>
						<div className={"Login"}>Выход</div>
					</a>
				</div>
				<TestComponent/>
			</div>
		</div>
	);
};

export default Test;