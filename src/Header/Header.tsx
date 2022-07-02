import React, {useContext, useState} from "react";
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
  font-family: Lineatura, sans-serif;
  margin-top: 3em;
  display: flex;
  justify-content: space-between`


export default Header;