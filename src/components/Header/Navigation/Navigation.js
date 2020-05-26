

import React, {Fragment} from 'react';
import classes from './Navigation.module.scss';
import NavItem from './NAvItem/NavItem';

const Navigation = (props) => {
    
   
    // let active = false;
    
    // let linkactive = false;
   
    return (
        <Fragment>
            <div className={classes.header__nav}>
                <ul className={classes.nav__list}>
                    <NavItem path='index.html'> HOME</NavItem>
                    <NavItem path='about.htm'> ABOUT</NavItem>
                    <NavItem path='gallery.html' alt={'active'}> GALLERY</NavItem>
                    <NavItem path='blog.html'> BLOG</NavItem>
                    <NavItem path='contact.html'> CONTACT</NavItem>
                </ul>
            </div>
        </Fragment>
    )
};

export default Navigation;