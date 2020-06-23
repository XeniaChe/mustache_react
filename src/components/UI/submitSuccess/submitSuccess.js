import React from 'react';
import classes from './submitSuccess.module.scss';

const SubmitSuccess = (props) => {
    return (
        <div className={classes.mainBox}>
            <div className={classes.innerBox}>
                <h3 className={classes.text}>Thank you. 
                Your submission was successful! </h3>
            </div>
        </div>
       
    )
};

export default SubmitSuccess;
