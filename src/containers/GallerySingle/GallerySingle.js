import React, { useState, useEffect } from 'react';
import classes from './GallerySingle.module.scss';
import { withRouter } from 'react-router-dom';

const GallerySinglePost = (props) => {
	const [ statePost, setPost ] = useState({
		person: null
	});

	let postId = +props.match.params.id;
	const persons = props.location.state.persons;
	let person = persons.find((el) => el.id === postId);

	useEffect(() => {
		console.log(props);
		setPost({
			person: person
		});
	}, []);

	let item = <p>Wait</p>;

	if (statePost.person) {
		item = (
			<section className={classes.single__visual}>
				<h1 className={classes.header__main__large}>
					gallery single post
				</h1>
				<figure className={classes.visual__photo_box}>
					<img
						src={`../images/${statePost.person.image}`}
						className={classes.visual__photo}
					/>
				</figure>
				<div className={classes.single__story__text}>
					<h2 className={classes.header__second__large}>
						prim and proper
					</h2>
					<p>{statePost.person.descr}</p>
				</div>
			</section>
		);
	}

	return item;
};

export default withRouter(GallerySinglePost);
