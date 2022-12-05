import React, {useState} from 'react';
import './Registered_Page.css';
import ContentChooser from "./ContentChooser/ContentChooser";

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