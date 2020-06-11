import React, { useState, useEffect} from 'react';
import axios from 'axios';
import classes from './GallerySingle.module.scss';


const GallerySinglePost = (props) => {
    const [ statePost,setPost] = useState({ person: null });

    useEffect( () => {
        // console.log(props)
        const loadData = async () => {
            if(!statePost.person || (statePost.person && statePost.person.id != props.match.params.id)) {
                const response = await axios.get('/persons/' + props.match.params.id);
            setPost({ person: {
                    id: response.data.id,
                    image: response.data.image,
                    text: response.data.descr }
                })
            }
        };
        loadData();
    }, []);

    let item = <p>Wait</p>;

    if (statePost.person) {
        item = (
                <section className={classes.single__visual}>
                    <h1 className={classes.header__main__large }>gallery single post</h1>
                    <figure className={classes.visual__photo_box}>
                        <img src={`../images/${statePost.person.image}`} className={classes.visual__photo}></img>
                    </figure >
                    <div className={classes.single__story__text}>
                        <h2 className={classes.header__second__large }> prim and proper</h2>
                    <p>{statePost.person.text}</p>
                    </div>
                </section>
            )
    };

    return (
        item
    )
};

export default GallerySinglePost;

