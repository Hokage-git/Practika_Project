import React, {useState} from 'react';
import logo from "../ParmaLogo.svg";
import RegPage from "../Content/regPage/Registered_Page";
import Tail from "../Content/Tail/Tail";
import '../Styles/Container.css';
import '../Styles/header.css';

const MainRegPage = () => {
	return (
		<div>
			<div className = "container">
				<div className = "header">
					<img src={logo} className = "Parma__Logo" alt="logo" onClick={() => window.location.assign('http://localhost:3000/home')}/>
					<a className= "Worker__info" onClick={()=>window.location.assign('http://localhost:3000/')}>
						<div className={"Login"}>Выход</div>
					</a>
				</div>
				<RegPage/>
			</div>
			<Tail />
		</div>
	);
};

export default MainRegPage;