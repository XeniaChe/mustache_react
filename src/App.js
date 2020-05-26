import React, {Fragment} from 'react';
import classes from './App.module.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Pages from './containers/Pages'

function App() {
  return (
    <div className={classes.App}>
     
      <Fragment>
        <Header/>
        <Pages/>
        <Footer/>
      </Fragment>
    </div>
  );
}

export default App;
