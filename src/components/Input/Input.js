import React, { Fragment } from 'react';
import classes from './Input.module.scss';

const Input = (props) => {
	let style = [ classes.form__input ];

	let validationError = null;
	if (props.invalid && props.touched) {
		style.push(classes.Invalid);

		//Validation error handling
		validationError = (
			<p className={classes.ValidationError}>
				Please, input the correct data
			</p>
		);
	}
	return (
		<Fragment>
			<div className={classes.form__group}>
				<input
					type='text'
					className={style.join(' ')}
					name={props.title}
					placeholder={props.placeholder}
					id={props.id}
					required
					onChange={props.changeInptut}
				/>
				<label htmlFor={props.id} className={classes.form__label}>
					{props.title}
				</label>
			</div>
			{validationError}
		</Fragment>
	);
};

export default Input;
