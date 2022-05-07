import React, {useContext, useState} from "react";
import styled from "styled-components";
import Logo from '../Images/Logo.svg'
import Modal from "../SharedCopmponents/Modal";
import Card from "../SharedCopmponents/Card";
import Auth from "../Auth/Auth";
import {AuthContext} from "../Auth/AuthContext";

const Header = () =>
{
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [authIsOpen, setAuthIsOpen] = useState<boolean>(false);
  return(
      <HeaderContainer>
          <img src={Logo} alt={'Logo'}/>
          <p>{isAuth}</p>
          {
              isAuth?
                  <button onClick={() => setIsAuth(false)}><p>Log Out</p></button>
                  :
                  <button onClick={() => setAuthIsOpen(true)}><p>LogIn</p></button>
          }
          {authIsOpen &&
              <Modal setIsOpen={setAuthIsOpen}>
                  <Auth setIsOpen={setAuthIsOpen}/>
              </Modal>
          }
      </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  font-family: Lineatura, sans-serif;
  margin-top: 3em;
  display: flex;
  justify-content: space-between`


export default Header;