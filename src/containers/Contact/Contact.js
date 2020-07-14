import React, { useEffect, useState, Fragment } from 'react';
import classes from './Contact.module.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/UI/Button/Button';
import HeaderMain from '../../components/UI/HeaderMain/HeaderMain';
import TextArea from '../../components/TextArea/TextArea';
import axios from 'axios';
import SubmitSuccess from '../../components/UI/submitSuccess/submitSuccess';
import Spinner from '../../components/UI/Spinner/Spinner';

const Contact = (props) => {
	const [ contactState, setContactState ] = useState({
		sentPost: {
			name: '',
			address: '',
			email: '',
			number: '',
			message: ''
		},
		readyToSend: false,
		submitted: false,
		redirect: false,
		sending: false
	});

	const inputFields = [
		{ id: 'name', placeHolder: 'your name' },
		{ id: 'address', placeHolder: 'your address' },
		{ id: 'email', placeHolder: 'your email' },
		{ id: 'number', placeHolder: 'your phone number' },
		{ id: 'message', placeHolder: 'your message' }
	];

	const changeInputDataHAndler = (event, id) => {
		let inputData = event.target.value;
		let stateCopy = {
			...contactState.sentPost
		};

		stateCopy[id] = inputData;
		setContactState({
			sentPost: stateCopy
		});
	};

	const submittDataHandler = () => {
		setContactState({
			readyToSend: true,
			submitted: true,
			sentPost: {
				name: contactState.sentPost.name,
				address: contactState.sentPost.address,
				email: contactState.sentPost.email,
				phoneNumber: contactState.sentPost.number,
				message: contactState.sentPost.message
			},
			sending: true
		});
	};

	useEffect(
		() => {
			if (contactState.readyToSend) {
				try {
					const postData = async () => {
						const postResult = await axios.post(
							'/usersData/',
							contactState.sentPost
						);
					};
					postData();
					// toogle the state
					setContactState({
						readyToSend: false,
						submitted: true,
						sentPost: {
							name: '',
							address: '',
							email: '',
							number: '',
							message: ''
						},
						sending: false
					});
					setTimeout(() => {
						props.history.push('/home');
					}, 2000);
				} catch (error) {
					console.log(error);
				}
			}
			return () => {
				setContactState({
					readyToSend: false,
					submitted: false,
					sentPost: {
						name: '',
						address: '',
						email: '',
						number: '',
						message: ''
					},
					sending: false
				});
			};
		},
		[ contactState.submitted ]
	);

	let form = (
		<form action='#' className={classes.contact__form} id='form'>
			{inputFields.slice(0, 4).map((el) => {
				return (
					<Input
						key={el.id}
						title={el.id}
						id={el.id}
						placeholder={el.placeHolder}
						changeInptut={(event) =>
							changeInputDataHAndler(event, el.id)}
					/>
				);
			})}
			<TextArea
				title={inputFields[4].id}
				id={inputFields[4].id}
				placeholder={inputFields[4].placeHolder}
				changeInput={(event) =>
					changeInputDataHAndler(event, inputFields[4].id)}
			/>
		</form>
	);

	return (
		<Fragment>
			{!contactState.submitted ? (
				<section className={classes.contact}>
					<HeaderMain>let's keep in touch</HeaderMain>
					{contactState.sending ? <Spinner /> : form}
					<Button click={submittDataHandler}>send</Button>
				</section>
			) : (
				<SubmitSuccess />
			)}
		</Fragment>
	);
};

export default Contact;
