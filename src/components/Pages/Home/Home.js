import React, { Fragment } from 'react';
import classes from './Home.module.scss';
import HomePerson from './Single_person/HomePerson';

const Home = (props) => {
	return (
		<Fragment>
			<section className={classes.main}>
				<div className={classes.main__box}>
					<h1 className={classes.header__main}>
						{' '}
						Main Section Header
					</h1>
					<div className={classes.main__text}>
						<p>This page was created by Xenia Cserkun</p>
						<p> using free design pattern</p>
						<p>from https://freewebsitetemplates.com/</p>
					</div>
					<button className={classes.btn}> READ MORE</button>
				</div>
			</section>
			<section className={classes.people}>
				<div className={classes.people__box}>
					<HomePerson img='the-father.jpg' title='the father' />
					<HomePerson img='the-actor.jpg' title='the actor' />
					<HomePerson img='the-nerd.jpg' title='the nerd' />
				</div>
			</section>
		</Fragment>
	);
};

export default Home;
