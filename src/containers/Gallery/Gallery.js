import React, { Fragment, useState, useEffect} from 'react';
import { Link} from 'react-router-dom';
import GalleryItem from '../../components/Gallery-item/GalleryItem';
import classes from './Gallery.module.scss';
import axios from 'axios';
// import GallerySinglePost from '../GallerySingle/GallerySingle';

const Gallery = (props) => {
    
    const [stateGallery, setGallery] = useState({persons: null});

    useEffect(() => {
        const loadData = async() => {
            const response = await  axios.get('/persons/');
            setGallery({ persons: response.data});
        };
        loadData();
    }, []);
  
    

    //RENDERING LIST
    let persons;
    if (stateGallery.persons) {
        persons = stateGallery.persons.map((el, elIndex) => {
            return (
                <Link to={'/gallery/'+ el.id}  key={el.id} match={props.match} >
                     <GalleryItem photo={el.image}  alt={elIndex} />
               </Link>
            ) 
        });
    };
    

    return(
        <Fragment>
            <div className={classes.gallery}>
                {persons}
            </div>
        </Fragment>
    )
};
export default Gallery;

{/* <Route path={props.match.url + '/:id'} exact component={GallerySinglePost}/>  */}

