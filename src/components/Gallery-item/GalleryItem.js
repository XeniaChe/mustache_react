import React, { Fragment } from 'react';
import classes from './GalleryItem.module.scss';
import { withRouter } from 'react-router-dom';

const GalleryItem = (props) => {
	const sourceImage = require(`../../images/${props.photo}`);
	return (
		<Fragment>
			<div className={classes.gallery__item}>
				<div className={classes.gallery__item__photo}>
					<div className={classes.item__link}>
						<img
							src={sourceImage}
							alt={props.alt}
							className={classes.photo}
						/>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default withRouter(GalleryItem);
