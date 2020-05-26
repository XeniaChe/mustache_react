import React, {Fragment} from 'react';
import classes from './Header.module.scss';
import withClass from '../HOC/WithClasses/WithClass';
import Navigation from './Navigation/Navigation';
import HeaderLogo from './Header-logo/Header-logo'


const Header = (props) => {
    return(
        <Fragment >
            <div className={classes.header__box}>
                <HeaderLogo />
                <Navigation/>
            </div>
        </Fragment>
    )
};

export default withClass(Header, classes.header) ;