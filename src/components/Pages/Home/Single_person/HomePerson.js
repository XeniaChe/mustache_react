import React from 'react';
import classes from './HomePerson.module.scss';

const HomePerson = (props) => {
    return (
        <div className={classes.person}>
            <figure className={classes.person__photo}>
                <img src={props.img} alt="persone photo" className={classes.person__photo}></img>
            </figure>
            <h1 className={classes.header__main}> {props.title}</h1>
        </div>
    )
};

export default HomePerson;