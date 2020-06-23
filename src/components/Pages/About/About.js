import React, {Fragment} from 'react';
import classes from './About.module.scss';
import HeaderMain from '../../UI/HeaderMain/HeaderMain';
import HeaderSecond from '../../UI/HeaderSecond/HeaderSecond';

const About = (props) => {
    return (
        <Fragment>
                <section className={classes.about__visual}>
                    <HeaderMain>mustacchio started</HeaderMain>
                    <div className={classes.visual__photo_box}>
                        <img src="./images/photographer.jpg" className={classes.visual__photo}></img>
                    </div>
                </section>
                <section className={classes.about__story}>
                    <div className={classes.about__story__text}>
                        <HeaderSecond>Aspernatur excepturi nisi molestiae !</HeaderSecond>
                        <p>Purus in massa tempor nec feugiat nisl pretium. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. 
                            At elementum eu facilisis sed odio morbi quis. Euismod elementum nisi quis eleifend quam adipiscing vitae.</p>
                    </div>
                    <div className={classes.about__story__text}>
                        <HeaderSecond>Amet consectetur adipisicing elit.</HeaderSecond>
                        <p>Diam volutpat commodo sed egestas egestas. Nulla aliquet porttitor lacus luctus accumsan. Duis ut diam quam nulla. Id venenatis a condimentum vitae sapien. Magna sit amet purus gravida quis. Neque egestas congue quisque egestas diam in arcu cursus. 
                            Id nibh tortor id aliquet lectus. At elementum eu facilisis sed odio morbi quis commodo..</p>
                    </div>
                    <div className={classes.about__story__text}>
                        <HeaderSecond>Lorem ipsum dolor sit.</HeaderSecond>
                        <p> Maecenas accumsan lacus vel facilisis volutpat est. Purus gravida quis blandit turpis cursus. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Lorem dolor sed viverra ipsum nunc. Tortor at risus viverra adipiscing at. Luctus accumsan tortor posuere ac ut consequat semper viverra. Neque vitae tempus quam pellentesque nec. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Tellus integer feugiat scelerisque varius. 
                            Aliquet bibendum enim facilisis gravida neque convallis a cras. Lectus arcu bibendum at varius vel pharetra. </p>
                    </div>
                </section>
        </Fragment>
    )
};

export default About;