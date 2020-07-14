import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import classes from './GallerySingle.module.scss';
import Spinner from '../../components/UI/Spinner/Spinner';

const GallerySinglePost = (props) => {
	const [ statePost, setPost ] = useState({
		person: null,
		loading: true
	});

	useEffect(() => {
		// console.log(props)
		try {
			const loadData = async () => {
				if (
					!statePost.person ||
					(statePost.person &&
						statePost.person.id != props.match.params.id)
				) {
					const response = await axios.get(
						'/persons/' + props.match.params.id
					);
					setPost({
						person: {
							id: response.data.id,
							image: response.data.image,
							text: response.data.descr
						},
						loading: true
					});
				}
			};
			loadData();
		} catch (error) {
			setPost({
				loading: false
			});
		}
	}, []);

	let item = null;
	if (statePost.loading) {
		item = <Spinner />;
	}

	if (statePost.person) {
		item = (
			<Fragment>
				<figure className={classes.visual__photo_box}>
					<img
						src={`../images/${statePost.person.image}`}
						className={classes.visual__photo}
					/>
				</figure>
				<div className={classes.single__story__text}>
					<h2 className={classes.header__second__large}>
						{' '}
						prim and proper
					</h2>
					<p>{statePost.person.text}</p>
				</div>
			</Fragment>
		);
	}

	return (
		<section className={classes.single__visual}>
			<h1 className={classes.header__main__large}>gallery single post</h1>
			{item}
		</section>
	);
};

export default GallerySinglePost;
