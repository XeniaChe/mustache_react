import React , {useEffect, useState} from 'react';
import classes from './Contact.module.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import HeaderMain from '../../components/HeaderMain/HeaderMain';
import TextArea from '../../components/TextArea/TextArea';
import axios from 'axios';

const Contact = (props) => {
    const [ contactState, setContactState] = useState({
        sentPost: {
            name: '',
            address: '',
            email: '',
            number: '',
            message: ''
        },
    });

    const [contactStateSecond, setContactStateSecond ] = useState({
        readyToSend: false,
        post: {
            name: '',
            address: '',
            email: '',
            phoneNumber: '',
            message: ''
        }
    });

    const inputFields = [
            { id: 'name', placeHolder: 'your name'},
            { id: 'address', placeHolder: 'your address'},
            { id: 'email', placeHolder: 'your email'},
            { id: 'number', placeHolder: 'your phone number'},
            { id: 'message', placeHolder: 'your message'},
    ];

    const changeInputDataHAndler = (event, id) => {
        let inputData = event.target.value; 
        let stateCopy = {
            ... contactState.sentPost
        };

        stateCopy[id] = inputData;
        setContactState({
            sentPost: stateCopy
        });
    };

    
    const postDataHandler = () => {
        setContactStateSecond({ 
            readyToSend: true,
            post: {
                name: contactState.sentPost.name,
                address: contactState.sentPost.address,
                email: contactState.sentPost.email,
                phoneNumber: contactState.sentPost.number,
                message: contactState.sentPost.message
            }
        });
    };

    useEffect(() => {
        if (contactStateSecond.readyToSend) {
            try {
                const postData = async () => {
                    const postResult  = await axios.post('/usersData/', contactStateSecond.post );
                    console.log(postResult);
                };
                postData();
                setContactStateSecond({readyToSend: false});
            } catch (error) {
                console.log(error)
            }
        }
    }, )


    const inputs = inputFields.slice(0, 4).map(el => {
       return <Input key={el.id} title={el.id} id={el.id}  placeholder={el.placeHolder} changeInptut={(event) => changeInputDataHAndler(event, el.id)}/>
    });

    return(
        <section className={classes.contact}>
            <HeaderMain>let's keep in touch</HeaderMain>
        <form action="#" className={classes.contact__form} id="form" >
            {inputs}
            {/* <Input title='name' id={inputFields[0].id} placeholder='name' changeInptut={(event) => changeInputDataHAndler(event, inputFields[0].id)}></Input>
            <Input title='adress' id={inputFields[1].id} placeholder='ADDRESS'></Input>
            <Input title='email' id={inputFields[2].id} placeholder='EMAIL'></Input>
            <Input title='number' id={inputFields[3].id} placeholder='PHONE NUMBER'></Input> */}
            <TextArea title={inputFields[4].id} id={inputFields[4].id} placeholder={inputFields[4].placeHolder} changeInput={(event) => changeInputDataHAndler(event, inputFields[4].id)}></TextArea>
        </form>
        <Button click={postDataHandler}>send</Button>
    </section>
    )
};

export default Contact;

