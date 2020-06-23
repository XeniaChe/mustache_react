import React from 'react';
import classes from './HeaderMain.module.scss';

const HeaderMain = (props) => {
    return(
    <h1 className={classes.header__main__large}>{props.children}</h1>
    )
};

export default HeaderMain;