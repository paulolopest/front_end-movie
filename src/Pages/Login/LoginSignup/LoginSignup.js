import React from 'react';
import useForm from '../../../Hooks/useForm';
import { UserContext } from '../../../Context/UserContext';
import Input from '../../../Components/CustomInput/Input';
import Button from '../../../Components/CustomButton/Button';
import { Link } from 'react-router-dom';

const LoginSignup = () => {
	const username = useForm();
	const email = useForm('email');
	const password = useForm('password');

	const { userSignup, loading, error } = React.useContext(UserContext);

	const handleSubmit = (event) => {
		event.preventDefault();

		userSignup(username.value, email.value, password.value);
	};

	return (
		<section className="login-box">
			<h1 className="title">Create Account</h1>

			<form onSubmit={handleSubmit}>
				<Input label="Username" type="text" name="username" {...username} />
				<Input label="Email" type="email" name="email" {...email} />
				<Input
					label="Password"
					type="password"
					name="password"
					{...password}
				/>

				{loading ? (
					<Button>Registering...</Button>
				) : (
					<Button>Register</Button>
				)}
			</form>

			<div className="login-box-nav">
				<span>
					Already have an account? <Link to="/login/">Log in</Link>{' '}
				</span>
			</div>

			{error && <p>{error}</p>}
		</section>
	);
};

export default LoginSignup;
