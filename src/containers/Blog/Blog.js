import React, {useState, useEffect} from 'react';
import classes from './Blog.module.scss';
import BlogPost from './BlogPost/BlogPost';
import axios from 'axios';
import BlogSingle from '../BlogSingle/BlogSingle';
import { Route } from 'react-router-dom';

const Blog = (props) => {
    let [blogState, setBlog] = useState({ posts: null });

    useEffect (() => {
        console.log(props)
        const loadData = async () => {
            const response = await axios.get('/blog-posts/');
            // console.log(response);
            setBlog({posts: response.data });
        };
        loadData();
    }, []);

    let blogPosts ;
    if(!blogState.posts) {blogPosts = <h3 style={{textAlign: 'center'}}>Loadin ...</h3>};
    if (blogState.posts) {
        blogPosts = blogState.posts.map((el) => {
            return <BlogPost key={el.id} photo={el.img} title={el.title} text={el.text} id={el.id}/> 
        })
    };

    return (
        <section className={classes.blog}>
            <div className={classes.blog__title}>
                <h1 className={classes.header__main__large}>BLOG</h1>
            </div>
            {blogPosts}
            <Route path={props.match.url}/>
            <BlogSingle />
        </section>
    );
};

export default Blog;