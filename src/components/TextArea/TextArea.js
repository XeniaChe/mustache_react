import React , {Fragment} from 'react';
import classes from './TextArea.module.scss';

const TexrArea = (props) => {
    return(
        <Fragment>
            <div className={classes.form__group}>
                <textarea name={props.title} rows="10" cols="20" placeholder={props.placeholder} id={props.id} onChange={props.changeInput}>
                </textarea>
                <label htmlFor={props.id} className={classes.form__label}></label>
            </div> 
        </Fragment>
    )
};

export default TexrArea;