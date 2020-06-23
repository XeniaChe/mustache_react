import React , {Fragment, useState, useEffect} from 'react';
import classes from './BlogSingle.module.scss';
import axios from 'axios';
import HeaderMain from '../../components/UI/HeaderMain/HeaderMain';
import HeaderSecond from '../../components/UI/HeaderSecond/HeaderSecond';

const BlogSingle = (props) => {
    const [stateBlogSingle, setBlogSingle] = useState({ post:null });

    useEffect(() => {
        console.log(props)
        const loadData = async () => {
            const response = await axios.get('/blog-single-posts/' + props.match.params.id);
            // console.log(response)
            setBlogSingle({
                post:{
                   photo: response.data.img,
                   title: response.data.title,
                   text1: response.data.text,
                   text2: response.data.text2,
                   text3: response.data.text3
                }
            })
        };
        loadData();
    }, []);

    let post = <h2> rendering</h2>

    if (stateBlogSingle.post) {
        post = (
            <Fragment>
                <section className={classes.blog_single}>
                <div className={classes.blog__title}>
                    <HeaderMain>blog single post</HeaderMain>
                </div>
                <div className={classes.blog_single__visual}>
                    <figure className={classes.blog_single__image}>
                        <img src={`../images/${stateBlogSingle.post.photo}`}  className={classes.photo}></img>
                    </figure>
                </div>
                </section>
                <section className={classes.blog_single__text}>
                    <HeaderSecond>{stateBlogSingle.post.title}</HeaderSecond>
                    <p>{stateBlogSingle.post.text1}</p>
                    <p>{stateBlogSingle.post.text2}</p>
                    <p>{stateBlogSingle.post.text3}</p>
                </section>
            </Fragment>
        )
    }
    
    return (
        post
    )
};
export default BlogSingle; 
