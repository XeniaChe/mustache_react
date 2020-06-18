import React from 'react';
import classes from './Contact.module.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import HeaderMain from '../../components/HeaderMain/HeaderMain';
import TextArea from '../../components/TextArea/TextArea';

const Contact = (props) => {
    return(
        <section className={classes.contact}>
            <HeaderMain>let's keep in touch</HeaderMain>
        <form action="#" className={classes.contact__form} id="form" >
            <Input title='name' id='name' placeholder='name'></Input>
            <Input title='adress' id='adress' placeholder='ADDRESS'></Input>
            <Input title='email' id='email' placeholder='EMAIL'></Input>
            <Input title='number' id='number' placeholder='PHONE NUMBER'></Input>
            <TextArea title='message' id='message' placeholder='message'>MESSAGE</TextArea>
        </form>
        <Button>send</Button>
    </section>
    )
};

export default Contact;

{/* <button className="btn btn--black margin__top--l" form="form" type="submit" >send</button> */}