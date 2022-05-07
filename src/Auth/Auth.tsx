import React, {Dispatch, SetStateAction, useCallback, useContext, useEffect, useMemo, useState} from "react";
import styled from "styled-components";
import Card from "../SharedCopmponents/Card";
import {Input} from "../SharedCopmponents/Input";
import {AddElementBtn} from "../SharedCopmponents/Buttons";
import {AuthContext, AuthProvider} from "./AuthContext";

interface IAuth
{
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const Auth = (props: IAuth) =>
{
    const {setIsOpen} = props;
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [login, setLogin] = useState<string>('');
    const [showError, setShowError] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const SuccessfulAuthorization = () => {
        setIsAuth(true);
        setIsOpen(false);
    }
    const Auth = async () =>
    {
        await fetch('http://localhost/organizer/auth.php', {
            method: 'post',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
                login: login,
                password: password,
            })
        }).then(res => res.status === 200 ? SuccessfulAuthorization()
            : setShowError(true));
    }
    return(
        <AuthContainer>
            <Card>
                <div style={{display:'flex', flexDirection:'column', padding:'0.3em 0.5em'}}>
                <AuthTitle>Авторизация</AuthTitle>
                    {isAuth}
                    <ErrorBox>
                        {showError &&
                            <p>Неправильный лоигн и/или пароль</p>
                        }
                    </ErrorBox>
                    <AuthInputContainer>
                        <p>Логин</p>
                        <Input value={login} type={'text'} onChange={e => setLogin(e.target.value)}/>
                    </AuthInputContainer>
                    <AuthInputContainer>
                        <p>Пароль</p>
                        <Input value={password} type={'password'} onChange={e => setPassword(e.target.value)}/>
                    </AuthInputContainer>
                    <AddElementBtn onClick={Auth}>Войти</AddElementBtn>
                </div>
            </Card>
        </AuthContainer>
    )
}

const AuthContainer = styled.div`

  max-width: 300px;
  margin: auto;
`

const ErrorBox = styled.div`
  height: 24px;
  padding: 3px;
  display: block;
  
  p{
    font-family: 'Raleway', sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: salmon;
    line-height: 100%;
  }
`

const AuthTitle = styled.h5`
    font-size: 18px;
`

const AuthInputContainer = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    margin-inline: auto;
    text-align: left;
`

export default Auth;