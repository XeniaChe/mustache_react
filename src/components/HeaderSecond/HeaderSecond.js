import React from 'react';
import classes from './HeaderSecond.module.scss';

const HeaderSecond = (props) => {
    return(
        <h2 className={classes.header__second}>{props.children}</h2>
    )
};

export default HeaderSecond;