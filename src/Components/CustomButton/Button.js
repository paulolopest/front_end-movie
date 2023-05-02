import React from 'react';

const Button = ({ children, ...props }) => {
	return (
		<button className="customButton animeButtonGradient" {...props}>
			{children}
		</button>
	);
};

export default Button;
