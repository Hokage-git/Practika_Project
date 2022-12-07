import React from 'react';
import logo from "../ParmaLogo.svg";
import TestComponent from "../Content/TestComponent/testComponent";
import Tail from "../Content/Tail/Tail";


const Test = () => {

	return (
		<div>
			<div className={"container"}>
				<div className = "header">
					<img src={logo} className = "Parma__Logo" alt="logo" onClick={() => window.location.assign('http://localhost:3000/home')}/>
					<a className= "Worker__info" onClick={()=>window.location.assign('http://localhost:3000/')}>
						<div className={"Login"}>Выход</div>
					</a>
				</div>
				<TestComponent/>
			</div>
			<Tail/>
		</div>
	);
};

export default Test;