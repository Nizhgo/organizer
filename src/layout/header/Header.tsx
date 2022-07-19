import React from "react";
import Logo from '../../assets/images/Logo.svg'
import {HeaderContainer} from "./style";

const Header = () => {
	return (
		<HeaderContainer>
			<img src={Logo} alt={'Logo'}/>
		</HeaderContainer>
	)
}

export default Header;