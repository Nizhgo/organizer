import React from "react";
import {SubmitButton, CancelButton} from "./style";

interface IButtonProps {
	variant: 'submit' | 'cancel';
}
const Button = (props: IButtonProps & React.HTMLProps<HTMLButtonElement>) => {
	const {variant, ...rest} = props;
	switch (variant) {
		case 'submit':
			// @ts-ignore
			return <SubmitButton {...rest}/>;
		case 'cancel':
			// @ts-ignore
			return <CancelButton {...rest}/>;
		default:
			// @ts-ignore
			return <SubmitButton {...rest}/>;
	}
}

export default Button;