import React, {createContext, useContext, useState} from 'react';
import BodyContainer from './SharedCopmponents/BodyContainer';
import Header from "./Header/Header";
import styled from "styled-components";
import Calendar from "./Calendar/Calendar";
import RightPanel from "./RightPanel/RightPanel";
import {DateContext} from "./Providers/DataContext";
import {GetMonthTitle} from "./Scripts/GetMonthTitle";

function App() {
const {nowDate} = useContext(DateContext);
  return (
          <AppWrapper>
              <AppContainer>
                  <AppContent>
                      <BodyContainer>
                          <Header/>
                          <MonthTitle>{GetMonthTitle(nowDate)}, {
                              nowDate.getFullYear()
                          }</MonthTitle>
                          <Calendar/>
                      </BodyContainer>
                      <RightPanel/>
                  </AppContent>
              </AppContainer>
            </AppWrapper>
  );
}

export default App;


const MonthTitle = styled.h2`
  font-size: 36px;
  color: black;
  margin-top: 1em;
`

const AppContent = styled.div`
  display: grid;
  grid-template-columns: 8fr 2.5fr;
  
    @media (max-width: 968px) {
        grid-template-columns: 1fr;
    }
`

const AppContainer = styled.div`
  margin-top: 1em;
  border-radius: 8px;
  background: #FDFDFD;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
    @media (max-width: 968px) {
        margin-top: 0;
    }
  `

const AppWrapper = styled.div`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    `
