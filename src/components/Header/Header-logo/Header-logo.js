import React, {Fragment} from 'react';
import classes from './Header-logo.module.scss';

const Navigation = (props) => {
    return (
        <Fragment>
                <div className={classes.header__logo}>
                    <img src='./images/logo.jpg' alt="header logo" className={classes.logo_img}></img>
                </div>
        </Fragment>
    )
};

export default Navigation;