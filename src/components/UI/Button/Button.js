import React, {Fragment} from 'react';
import classes from './Button.module.scss';

const Button = (props) => {
    return(
        <Fragment>
            <button className={classes.btn__black} onClick={props.click}> {props.children}</button>
        </Fragment>
    )
};
export default Button;