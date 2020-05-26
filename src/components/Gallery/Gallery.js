import React, {Component} from 'react';
import GalleryItem from './Gallery-item/GalleryItem';
import classes from './Gallery.module.scss'

const Gallery = (props) => {
    //STYLES
    const styleGallery =[classes.gallery];
    styleGallery.push(classes.margin__bottom_l);

    //RENDERING LIST
    const persons = props.list.map ( (el, elIndex) => {
        return <GalleryItem photo={el.photo} key={el.id} alt={elIndex}/>
    });

    return(
        <div className={styleGallery.join(' ')}>
           {persons}
        </div>
    )
};

export default Gallery;