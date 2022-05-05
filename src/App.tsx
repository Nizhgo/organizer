import React, {createContext, useState} from 'react';
import BodyContainer from './SharedCopmponents/BodyContainer';
import Header from "./Header/Header";
import styled from "styled-components";
import Calendar from "./Calendar/Calendar";
import RightPanel from "./RightPanel/RightPanel";

export const DateContext = createContext<any>(new Date());

function App() {
    const [selectedDay, setSelectedDay] = useState(new Date());
    const nowDate = new Date();
  return (
      <DateContext.Provider value={{selectedDay, setSelectedDay, nowDate}}>
          <BodyContainer>
              <Header/>
              <MonthTitle>{nowDate.toLocaleString('ru', {
                  month: 'long'
              })}, {
                  nowDate.getFullYear()
              }</MonthTitle>
              <Calendar/>
              <RightPanel/>
          </BodyContainer>
      </DateContext.Provider>
  );
}

export default App;


const MonthTitle = styled.h2`
  font-size: 36px;
  color: black;
  margin-top: 1em;
`