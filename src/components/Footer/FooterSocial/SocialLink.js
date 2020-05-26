import React, {Fragment} from 'react';
import classes from './SocialLink.module.scss';

const SocialLink = (props) => {
    const styleLink = [classes.logos__link];
    
    if (props.alt === 'twitter') {
        styleLink.push(classes.link__twitter)
    } else if (props.alt === 'facebook') {
        styleLink.push(classes.link__facebook)
    } else if (props.alt === 'google') {
        styleLink.push(classes.link__google)
    }else if (props.alt === 'pinterest') {
        styleLink.push(classes.link__pinterest)
    };

    return (
        <Fragment>
            <li className={classes.logos__item}>
                <a href={props.path} className={styleLink.join(' ')}  alt={props.alt}> </a>
            </li>
        </Fragment>
    )
};

export default SocialLink;