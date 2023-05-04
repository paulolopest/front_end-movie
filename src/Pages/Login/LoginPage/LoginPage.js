import React from 'react';
import useForm from '../../../Hooks/useForm';
import { UserContext } from '../../../Context/UserContext';
import Input from '../../../Components/CustomInput/Input';
import Button from '../../../Components/CustomButton/Button';
import { Link } from 'react-router-dom';

const LoginPage = () => {
	const username = useForm();
	const password = useForm('password');

	const { loading, error, userLogin } = React.useContext(UserContext);

	const handleSubmit = async (event) => {
		event.preventDefault();
		await userLogin(username.value, password.value);
	};

	return (
		<section className="login-box">
			<h1 className="title">Sign in</h1>

			<form onSubmit={handleSubmit}>
				<Input
					label="Email or username"
					type="text"
					name="username"
					{...username}
				/>
				<Input
					label="Password"
					type="password"
					name="password"
					{...password}
				/>

				{loading ? (
					<Button disabled>Sending...</Button>
				) : (
					<Button>Continue</Button>
				)}
			</form>
			<div className="login-box-nav">
				<span>
					New user? <Link to="/login/signup">Start here</Link>{' '}
				</span>
			</div>

			{error && <p>{error}</p>}
		</section>
	);
};

export default LoginPage;
