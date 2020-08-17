import React, { Fragment } from 'react';
import classes from './App.module.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Pages/Home/Home';
import asyncComp from './components/HOC/asyncComponent/asyncComponent';

function App() {
	const AsyncAbout = asyncComp(() => {
		return import('./components/Pages/About/About');
	});

	const AsyncGallerySingle = asyncComp(() => {
		return import('./containers/GallerySingle/GallerySingle');
	});

	const AsyncGallery = asyncComp(() => {
		return import('./containers/Gallery/Gallery');
	});

	const AsyncBlog = asyncComp(() => {
		return import('./containers/Blog/Blog');
	});

	const AsyncBlogSingle = asyncComp(() => {
		return import('./containers/BlogSingle/BlogSingle');
	});

	const AsyncContact = asyncComp(() => {
		return import('./containers/Contact/Contact');
	});

	const AsyncNotFound = asyncComp(() => {
		return import('./components/UI/404/404');
	});

	return (
		<BrowserRouter>
			<div className={classes.App}>
				<Fragment>
					<Header />
					<Switch>
						<Route path='/home' exact component={Home} />
						<Route path='/about' exact component={AsyncAbout} />
						<Route path='/blog/:id' component={AsyncBlogSingle} />
						<Route path='/blog' component={AsyncBlog} />
						<Route
							path='/gallery/:id'
							component={AsyncGallerySingle}
						/>
						<Route path='/gallery' component={AsyncGallery} />
						<Route path='/contact' component={AsyncContact} />
						<Route component={AsyncNotFound} />
					</Switch>
					<Footer />
				</Fragment>
			</div>
		</BrowserRouter>
	);
}

export default App;
