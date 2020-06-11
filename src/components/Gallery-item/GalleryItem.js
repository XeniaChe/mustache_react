import React, {Fragment} from 'react';
import classes from './GalleryItem.module.scss';
import {withRouter}  from 'react-router-dom';

const GalleryItem =(props) => {
    return (
        <Fragment>
            <div className={classes.gallery__item}>
                <div className={classes.gallery__item__photo}>
                    <div className={classes.item__link}>
                        <img src={`./images/${props.photo}`}  alt={props.alt} className={classes.photo}></img>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default withRouter(GalleryItem);