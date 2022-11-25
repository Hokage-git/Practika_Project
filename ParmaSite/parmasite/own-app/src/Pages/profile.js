import React from 'react';
import logo from "../ParmaLogo.svg";
import Tail from "../Content/Tail/Tail";
import PersonCard from "../Content/PersonCard/personCard";

const Profile = () => {
	return (
		<div>
			<div className = "container">
				<div className = "header">
					<img src={logo} className = "Parma__Logo" alt="logo" onClick={() => window.location.assign('http://localhost:3000/home')}/>
					<a className= "Worker__info">
						<div className={"Login"}>John Martin Doe</div>
					</a>
				</div>
				<PersonCard/>
			</div>
			<Tail />
		</div>
	);
};

export default Profile;