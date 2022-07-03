import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import DayElement from "./DayElement";
import {DateContext} from "../Providers/DataContext";
import GetArrayOfDaysForMonths from "../Scripts/GetArrayOfDaysForMonths";

const Calendar = () =>
{
    const {selectedDay, setSelectedDay} = useContext(DateContext);
    return(
        <>
            <CalendarContainer>
                    {
                        GetArrayOfDaysForMonths().map(value => {
                            return(
                                <DayElementWrapper key={value.getTime()} onClick={() => setSelectedDay(value)}>
                                    <DayElement date={value} selected={selectedDay}/>
                                </DayElementWrapper>

                            );
                        })
                    }
            </CalendarContainer>
        </>
    )
}


const CalendarContainer = styled.div`
  width: 100%;
  grid-template-columns: repeat(7, 1fr);
  display: grid;
  column-gap: 1em;
  row-gap: 1.72234em;
  margin-top: 4.123em;
  
    @media (max-width: 1200px) {
      column-gap: 1.32em;
    }
  
    @media (max-width: 1000px) {
        column-gap: 0.73em;
    }
  
    @media (max-width: 756px) {
        column-gap: 0.3em;
    }
`

const DayElementWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    `

export default Calendar;