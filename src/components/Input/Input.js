import React , {Fragment} from 'react';
import classes from './Input.module.scss';

const Input = (props) => {
    return(
        <Fragment>
            <div className={classes.form__group}>
                <input type="text" className={classes.form__input} name={props.title}
                    placeholder={props.placeholder} id={props.id} required onChange={props.changeInptut} ></input>
                <label htmlFor={props.id} className={classes.form__label}>{props.title}</label>
            </div>
        </Fragment>
    )
};

export default Input;