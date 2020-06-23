import React from 'react';
import classes from './notFound.module.scss';

const pathNotFound = (props) => {
    return (
        <div className={classes.mainBox}>
            <div className={classes.innerBox}>
                <h3 className={classes.text}>Not found</h3>
            </div>
        </div>
       
    )
};

export default pathNotFound;
