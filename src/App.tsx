import React, {createContext, useContext, useMemo, useState} from 'react';
import BodyContainer from './ui/BodyContainer';
import Header from "./components/header/Header";
import styled from "styled-components";
import Calendar from "./components/calendar/Calendar";
import TaskInteractionPanel from "./components/taskInteractionPanel/TaskInteractionPanel";
import {DateContext} from "./components/providers/DataContext";
import {GetMonthTitle} from "./scripts/GetMonthTitle";

function App() {
const {nowDate} = useContext(DateContext);
const month = useMemo(() => GetMonthTitle(nowDate), [nowDate]);
const year = useMemo(() => nowDate.getFullYear(), [nowDate]);
  return useMemo(() => (
    <AppWrapper>
        <AppContainer>
            <AppContent>
                <BodyContainer>
                    <Header/>
                    <MonthTitle>{year}, {
                        month
                    }</MonthTitle>
                    <Calendar/>
                </BodyContainer>
                <TaskInteractionPanel/>
            </AppContent>
        </AppContainer>
    </AppWrapper>
  ), [month, year]);
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
