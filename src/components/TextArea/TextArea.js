import React , {Fragment} from 'react';
import classes from './TextArea.module.scss';

const TexrArea = (props) => {
    return(
        <Fragment>
            <div class={classes.form__group}>
                <textarea name={props.title} rows="10" cols="20" placeholder={props.placeholder} id={props.id}>
                </textarea>
                <label for={props.id} class={classes.form__label}>{props.title}</label>
            </div> 
        </Fragment>
    )
};

export default TexrArea;