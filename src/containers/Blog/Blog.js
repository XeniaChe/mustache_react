import React, {useState, useEffect} from 'react';
import classes from './Blog.module.scss';
import BlogItem from '../../components/BlogItem/BlogItem';
import axios from 'axios';

import HeaderMain from '../../components/UI/HeaderMain/HeaderMain';

const Blog = (props) => {
    let [blogState, setBlog] = useState({ posts: null });

    useEffect (() => {
        // console.log(props)
        const loadData = async () => {
            const response = await axios.get('/blog-posts/');
            // console.log(response);
            setBlog({posts: response.data });
        };
        loadData();
    }, []);

    let blogPosts ;
    if(!blogState.posts) {blogPosts = <p style={{textAlign: 'center'}}>Loading ...</p>};
    if (blogState.posts) {
        blogPosts = blogState.posts.map((el) => {
            return <BlogItem key={el.id} photo={el.img} title={el.title} text={el.text} id={el.id} match={props.match}/> 
        })
    };

    return (
        <section className={classes.blog}>
            <div className={classes.blog__title}>
                <HeaderMain>blog</HeaderMain>
            </div>
            {blogPosts}
            {/* <Route path= {props.match.url + '/:id'} exact component={BlogSingle}/> */}
        </section>
    );
};

export default Blog;