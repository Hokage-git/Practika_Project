import React, {useState} from 'react';
import './Registered_Page.css';
import DescriptionImage from "./DescriptionImage/DescriptionImage";
import testImg from '../unregPage/LogInWindow/ParmaTeam.jpg';
import ContentChooser from "./ContentChooser/ContentChooser";
import StatsPage from "../StatsPage/StatsPage";

const RegPage = () => {

	return (
		<div className={"content__container"}>
			<h1 className={"Title__Text"}>
				Узнай  побольше о компании в первые дни работы!
			</h1>
			<ContentChooser/>
		</div>
	);
};

export default RegPage;