import React, {Fragment} from 'react';
import { Link} from 'react-router-dom';
import classes from './BlogPost.module.scss';

const BlogPost = (props) => {

    return (
        <Fragment>
            <div className={classes.blog__section}>
                <figure className={classes.blog__section__image}>
                    <img src={`./images/${props.photo}`}  className={classes.photo}></img>
                </figure>
                <div className={classes.blog__section__text}>
                    <h2 className={classes.blog__header__second}>{props.title}</h2>
                        <p>{props.text}</p>
                        <Link to={'/blog/' + props.id}>
                            <button className={classes.btn__black}> READ THIS</button>
                        </Link>
                </div>
            </div>
        </Fragment>
    )
};

export default BlogPost;