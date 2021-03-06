import React, { Fragment } from 'react';
import classes from './Header-logo.module.scss';

const Navigation = (props) => {
	const sourceImage = require(`../../../images/logo.jpg`);
	return (
		<Fragment>
			<div className={classes.header__logo}>
				<img
					src={sourceImage}
					alt='header logo'
					className={classes.logo_img}
				/>
			</div>
		</Fragment>
	);
};

export default Navigation;
