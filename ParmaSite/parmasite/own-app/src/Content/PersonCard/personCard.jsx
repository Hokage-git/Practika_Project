import React from 'react';
import preset from '../../sample_image.png';
import './personCard.css'

const PersonCard = () => {
	return (
		<div className={"card"}>
			<img src={preset}/>
			<div className={"info"}>

				<div className={"piece__of__name"}>
					<div className={"description"}>
						Name
						<div></div>
					</div>
					John
				</div>

				<div className={"piece__of__name"}>
					<div className={"description"}>
						Second Name
						<div></div>
					</div>
					Martin
				</div>

				<div className={"piece__of__name"}>
					<div className={"description"}>
						Surname
						<div></div>
					</div>
					Doe
				</div>

				<div className={"piece__of__name"}>
					<div className={"description"}>
						Department
						<div></div>
					</div>
					Programmer
				</div>
			</div>
		</div>
	);
};

export default PersonCard;