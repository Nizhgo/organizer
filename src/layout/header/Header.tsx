import React from "react";
import {HeaderContainer} from "./style";
import Logo from '../../assets/images/Logo.svg'
import {Badge} from "antd";

const Header = () => {
    return (
        <HeaderContainer>
            <img src={Logo} alt={'Logo'}/>
        </HeaderContainer>
    )
}

export default Header;