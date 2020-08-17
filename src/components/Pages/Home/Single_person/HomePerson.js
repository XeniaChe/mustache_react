import React from 'react';
import classes from './HomePerson.module.scss';

const HomePerson = (props) => {
	const sourceImage = require(`../../../../images/${props.img}`);
	return (
		<div className={classes.person}>
			<figure className={classes.person__photo}>
				<img
					src={sourceImage}
					alt='persone photo'
					className={classes.person__photo}
				/>
			</figure>
			<h1 className={classes.header__main}> {props.title}</h1>
		</div>
	);
};

export default HomePerson;
