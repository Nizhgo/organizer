import {Dispatch, SetStateAction, useCallback, useEffect, useState} from "react";
import React from "react";
import styled from "styled-components";
import closeIcon from '../assets/images/close_FILL0_wght400_GRAD0_opsz48.svg';

interface IModal {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    children: React.ReactNode;
}
const Modal = (props: IModal) =>{
    const {setIsOpen, children} = props
    return(
        <ModalWrapper>
            <CloseBtn onClick={() => setIsOpen(false)}><img src={closeIcon} alt={'close'}/></CloseBtn>
            {children}
        </ModalWrapper>
    )
}

const ModalWrapper = styled.div`
  text-align: center;
  z-index: 1000000;
  position: absolute;
  display: flex;
  align-items: center;
  justify-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.642);
    `

const CloseBtn = styled.div`
  position: absolute;
  top: 32px;
  right: 64px;
  height: 32px;
  width: 32px;
  
  .img
  {
  }
`

export default Modal;