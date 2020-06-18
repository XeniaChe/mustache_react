import React, {Fragment} from 'react';
import { Link} from 'react-router-dom';
import classes from './BlogItem.module.scss';
import Button from '../Button/Button';
import HeaderSecond from '../HeaderSecond/HeaderSecond';

const BlogItem = (props) => {
    return (
        <Fragment>
            <div className={classes.blog__section}>
                <figure className={classes.blog__section__image}>
                    <img src={`./images/${props.photo}`} alt='photo'  className={classes.photo}></img>
                </figure>
                <div className={classes.blog__section__text}>
                    <HeaderSecond>{props.title}</HeaderSecond>
                    <p>{props.text}</p>
                    <Link to={props.match.url + '/'+ props.id}>
                        <Button>read this</Button>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
};

export default BlogItem;

