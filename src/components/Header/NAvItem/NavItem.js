import React, {Fragment} from 'react';
import classes from './NavItem.module.scss';

const NavItem = (props) => {
    const classLink = [classes.nav__link];
   if  (props.alt === 'active') {
     classLink.push(classes._active)
   };
    return (
        <Fragment>
            <li className={classes.nav__item}>
                <a href={props.path} className={classLink.join(' ')} alt={props.alt} > 
                {props.children}
                </a>
            </li>
        </Fragment>
    )
};

export default NavItem;