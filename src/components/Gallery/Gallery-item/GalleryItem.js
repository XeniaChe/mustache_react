import React, {Fragment} from 'react';
import classes from './GalleryItem.module.scss'

const GalleryItem = (props) => {
    return (
        <Fragment>
            <div className={classes.gallery__item}>
                <div className={classes.gallery__item__photo}>
                    <a href="person.html" className={classes.item__link}>
                        <img src={props.photo} alt={props.alt} className={classes.photo}></img>
                    </a>
                </div>
            </div>
        </Fragment>
    )
};

export default GalleryItem;