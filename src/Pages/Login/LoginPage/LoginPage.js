import React from 'react';
import useForm from '../../../Hooks/useForm';
import { UserContext } from '../../../Context/UserContext';
import Input from '../../../Components/CustomInput/Input';
import Button from '../../../Components/CustomButton/Button';
import { Link } from 'react-router-dom';

const LoginPage = () => {
	const username = useForm();
	const password = useForm('password');

	const { userLogin, error, loading } = React.useContext(UserContext);

	const handleSubmit = (event) => {
		event.preventDefault();

		if (username.validate() && password.validate()) {
			userLogin(username.value, password.value);
		}
	};

	return (
		<section className="login-box">
			<h1 className="title">Sign In</h1>

			<form onSubmit={handleSubmit}>
				<Input label="Username" type="text" name="username" {...username} />
				<Input
					label="Password"
					type="password"
					name="password"
					{...password}
				/>

				{loading ? (
					<Button disabled>Sending...</Button>
				) : (
					<Button>Sign in</Button>
				)}
			</form>
			<div className="login-box-nav">
				<span>
					New here? <Link to="/login/signup">Register</Link>{' '}
				</span>
			</div>
			{/* {error && <p>{error}</p>} */}
		</section>
	);
};

export default LoginPage;
