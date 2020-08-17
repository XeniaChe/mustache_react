import React, { useEffect, useState, Fragment } from 'react';
import classes from './Contact.module.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/UI/Button/Button';
import HeaderMain from '../../components/UI/HeaderMain/HeaderMain';
// import TextArea from '../../components/TextArea/TextArea';
import axios from 'axios';
import SubmitSuccess from '../../components/UI/submitSuccess/submitSuccess';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../components/HOC/withErrorHandler/withErrorHandler';

const Contact = (props) => {
	let ElementFill = function(
		elementType,
		name,
		placeholder,
		minLength,
		maxLength,
		isEmail,
		isNumeric
	) {
		this.elementType = elementType;
		this.elConfig = {
			name: name,
			placeholder: placeholder
		};
		this.value = '';
		this.validation = {
			required: true,
			minLength: minLength,
			maxLength: maxLength,
			isEmail: isEmail,
			isNumeric: isNumeric
		};
		this.valid = false;
		this.touched = false;
	};

	const [ contactState, setContactState ] = useState({
		sentPost: {
			name: '',
			address: '',
			email: '',
			number: '',
			message: ''
		},
		submitted: false,
		sending: false,
		formFields: {
			name: new ElementFill('input', 'name', 'your name'),
			address: new ElementFill('input', 'address', 'your address'),
			email: new ElementFill(
				'input',
				'email',
				'your email',
				false,
				false,
				true
			),
			number: new ElementFill(
				'input',
				'number',
				'your phone number',
				false,
				false,
				false,
				true
			),
			message: new ElementFill('textarea', 'message', 'your message')
		},
		formIsValid: false
	});

	// Form VALIDATION
	const formValidCheck = (value, rules) => {
		let isValid = true;
		if (rules.required) {
			isValid = value.trim() !== '' && isValid;
		}

		if (rules.minLength) {
			isValid = value.length >= rules.minLength && isValid;
		}

		if (rules.maxLength) {
			isValid = value.length <= rules.maxLength && isValid;
		}

		//to check if it's an email.
		if (rules.isEmail) {
			const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
			isValid = pattern.test(value) && isValid;
		}

		if (rules.isNumeric) {
			const pattern = /^\d+$/;
			isValid = pattern.test(value) && isValid;
		}

		return isValid;
	};

	//on Input Hadler
	const changeInputDataHAndler = (event, id) => {
		let inputData = event.target.value;
		let statePostCopy = {
			...contactState.sentPost
		};

		statePostCopy[id] = inputData;
		let formFieldsCopy = {
			...contactState.formFields
		};
		let formElCopy = {
			...contactState.formFields[id]
		};
		//Validation check
		formElCopy.valid = formValidCheck(inputData, formElCopy.validation);

		formElCopy.touched = true;
		formFieldsCopy[id] = formElCopy;

		// Checking overall form validation
		let formIsValid = true;
		for (let id in formFieldsCopy) {
			formIsValid = formFieldsCopy[id].valid && formIsValid;
		}

		setContactState((prevState) => {
			return {
				sentPost: statePostCopy,
				submitted: prevState.submitted,
				sending: prevState.sending,
				formFields: formFieldsCopy,
				formIsValid: formIsValid
			};
		});
	};

	const submittDataHandler = () => {
		setContactState({
			sentPost: contactState.sentPost,
			submitted: false,
			sending: true,
			formFields: contactState.formFields,
			formIsValid: contactState.formIsValid
		});
		if (contactState.formIsValid) {
			try {
				const postData = async () => {
					const postResult = await axios.post(
						'/usersData/',
						contactState.sentPost
					);
					// toogle the state if submitted successfull
					setContactState({
						sentPost: {
							name: '',
							address: '',
							email: '',
							number: '',
							message: ''
						},
						submitted: true,
						sending: false,
						formFields: contactState.formFields,
						formIsValid: false
					});
					setTimeout(() => {
						props.history.push('/home');
					}, 2000);
				};
				postData();
			} catch (error) {
				console.log(error);
				// toogle the state if error
				setContactState({
					sentPost: {
						name: '',
						address: '',
						email: '',
						number: '',
						message: ''
					},
					submitted: false,
					sending: false,
					formFields: contactState.formFields,
					formIsValid: false
				});
			}
		}
	};

	//Array from state formFields
	let stateArray = [];
	for (let key in contactState.formFields) {
		stateArray.push({
			configuration: contactState.formFields[key],
			id: key
		});
	}

	let form = (
		<form action='#' className={classes.contact__form} id='form'>
			{stateArray.map((el) => {
				return (
					<Input
						key={el.id}
						title={el.configuration.elConfig.name}
						id={el.id}
						placeholder={el.configuration.elConfig.placeholder}
						changeInptut={(event) =>
							changeInputDataHAndler(event, el.id)}
						invalid={!el.configuration.valid}
						touched={el.configuration.touched}
					/>
				);
			})}
			<Button click={submittDataHandler}>send</Button>
		</form>
	);

	return (
		<Fragment>
			{!contactState.submitted ? (
				<section className={classes.contact}>
					<HeaderMain>let's keep in touch</HeaderMain>
					{contactState.sending ? <Spinner /> : form}
				</section>
			) : (
				<SubmitSuccess />
			)}
		</Fragment>
	);
};

export default withErrorHandler(Contact, axios);
