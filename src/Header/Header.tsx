import React from "react";
import styled from "styled-components";
import Logo from '../Images/Logo.svg'

const Header = () =>
{
  return(
      <HeaderContainer>
          <img src={Logo} alt={'Logo'}/>
      </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  margin-top: 3em;
  display: flex`

export default Header;