import React from 'react';

const Input = ({ label, value, name, onChange, error, onBlur, type }) => {
	return (
		<div className="custom-input">
			<label htmlFor={name}>{label}</label>
			<input
				id={name}
				name={name}
				type={type}
				onChange={onChange}
				value={value}
				onBlur={onBlur}
			></input>
			{error && <p>{error}</p>}
		</div>
	);
};

export default Input;
