import React, {Fragment} from 'react';
import classes from './Footer.module.scss';
import SocialLink from './FooterSocial/SocialLink'


const Footer = (props) => {
   const  socialNames = [   {name:'twitter', path:'https://twitter.com/explore', id:'1'}, 
                            {name:'facebook', path: 'https://facebook.com', id:'2'}, 
                            {name:'google', path:'https://google.com', id:'3' }, 
                            {name:'pinterest', path:'https://pinterest.com', id:'4'} ];

   const logos = socialNames.map( el => 
        {return <SocialLink path={el.path} alt={el.name} key={el.id}/>});
    
    return(
        <Fragment >
        <footer className={classes.footer}>
            <div className={classes.footer__box}>
                <p>© 2023 by Mustacchio. All rights reserved.</p>
                <div className={classes.footer__logos}>
                    <ul className={classes.logos__list}>
                        {logos}
                    </ul>
                </div>
            </div>
        </footer>
        </Fragment>
    )
};

export default Footer;