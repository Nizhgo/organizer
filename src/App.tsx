import React, {createContext, useState} from 'react';
import BodyContainer from './SharedCopmponents/BodyContainer';
import Header from "./Header/Header";
import styled from "styled-components";
import Calendar from "./Calendar/Calendar";
import RightPanel from "./RightPanel/RightPanel";
import {OrganizerProvider} from "./Auth/OrganizerContext";

export const DateContext = createContext<any>(new Date());

function App() {
    const [selectedDay, setSelectedDay] = useState(new Date());
    const nowDate = new Date();
  return (
      <OrganizerProvider>
      <DateContext.Provider value={{selectedDay, setSelectedDay, nowDate}}>
              <AppWrapper>
                  <BodyContainer>
                      <Header/>
                      <MonthTitle>{nowDate.toLocaleString('ru', {
                          month: 'long'
                      })}, {
                          nowDate.getFullYear()
                      }</MonthTitle>
                      <Calendar/>
                  </BodyContainer>
                    <RightPanel/>
              </AppWrapper>
      </DateContext.Provider>
      </OrganizerProvider>
  );
}

export default App;


const MonthTitle = styled.h2`
  font-size: 36px;
  color: black;
  margin-top: 1em;
`

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 359px;
`