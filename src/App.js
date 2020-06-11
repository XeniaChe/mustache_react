import React, {Fragment} from 'react';
import classes from './App.module.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// import Pages from './containers/Pages';

import {BrowserRouter, Route} from 'react-router-dom';

import Gallery from './containers/Gallery/Gallery';
import Home from './components/Pages/Home/Home';
import GallerySingle from './containers/GallerySingle/GallerySingle';
import About from './components/Pages/About/About';
import Blog from './containers/Blog/Blog';

function App() {
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Fragment>
          <Header/>
            <Route path='/' exact component={Home}/>
            <Route path='/about/' exact component={About}/>
            <Route path='/blog/' exact component={Blog}/>
            <Route path='/gallery/' exact component={Gallery}/>
            <Route path='/gallery/:id'  component={GallerySingle}/>
          <Footer/>
        </Fragment>
      </div>
    </BrowserRouter>
  );
}

export default App;
