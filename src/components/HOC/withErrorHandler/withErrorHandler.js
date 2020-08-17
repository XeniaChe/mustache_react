import React, { Fragment, useEffect, useState } from 'react';

// import Modal from '../../UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
	return (props) => {
		const [ state, setState ] = useState({
			error: null
		});

		const requestInterceptors = axios.interceptors.request.use((req) => {
			setState({ error: null });
			return req;
		});

		const responseInterceptors = axios.interceptors.response.use(
			(res) => res,
			(error) => {
				setState({ error: error });
			}
		);

		useEffect(() => {
			return () => {
				console.log(
					'interceptors unmount',
					requestInterceptors,
					responseInterceptors
				);
				axios.interceptors.request.eject(requestInterceptors);
				axios.interceptors.request.eject(responseInterceptors);
			};
		}, []);

		const errorConfirmedHandler = () => {
			setState({
				error: null
			});
		};

		return (
			<Fragment>
				{/* <Modal shown={state.error} modalClicked={errorConfirmedHandler}> */}
				{state.error ? state.error.message : null}
				{/* </Modal> */}
				<WrappedComponent {...props} />
			</Fragment>
		);
	};
};

export default withErrorHandler;
