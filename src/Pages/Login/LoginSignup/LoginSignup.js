import React from 'react';
import useForm from '../../../Hooks/useForm';
import { UserContext } from '../../../Context/UserContext';
import Input from '../../../Components/CustomInput/Input';
import Button from '../../../Components/CustomButton/Button';

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
		<section>
			<h1>Signup</h1>

			<form onSubmit={handleSubmit}>
				<Input label="Username" type="text" name="username" {...username} />
				<Input label="Email" type="email" name="email" {...email} />
				<Input
					label="Password"
					type="password"
					name="password"
					{...password}
				/>

				{loading ? <Button>Sending...</Button> : <Button>Send</Button>}
			</form>

			{error && <p>{error}</p>}
		</section>
	);
};

export default LoginSignup;
