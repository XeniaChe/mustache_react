import React, {Fragment} from 'react';
import classes from './Header.module.scss';
import withClass from '../HOC/WithClasses/WithClass';
import HeaderLogo from './Header-logo/Header-logo';

import {NavLink} from 'react-router-dom';


const Header = (props) => {
   

    return(
        <Fragment >
            <div className={classes.header__box}>
                <HeaderLogo />
                <div className={classes.header__nav}>
                    <ul className={classes.nav__list}>
                        <li className={classes.nav__item}>
                            <NavLink to='/home' className={classes.nav__link} activeStyle={{color: '#09BFA9'}} exact>HOME</NavLink>
                        </li>
                        <li className={classes.nav__item}>
                            <NavLink to='/about' className={classes.nav__link} activeStyle={{color: '#09BFA9'}}>ABOUT</NavLink>
                        </li>
                        <li className={classes.nav__item}>
                            <NavLink to='/gallery' className={classes.nav__link} activeStyle={{color: '#09BFA9'}} >GALLERY</NavLink>
                        </li>
                        <li className={classes.nav__item}>
                            <NavLink to='/blog' className={classes.nav__link} activeStyle={{color: '#09BFA9'}}>BLOG</NavLink>
                        </li>
                        <li className={classes.nav__item}>
                            <NavLink to='/contact' className={classes.nav__link} activeStyle={{color: '#09BFA9'}}>CONTACT</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
};

export default withClass(Header, classes.header) ;