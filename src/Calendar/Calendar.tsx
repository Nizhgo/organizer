import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import DayElement from "./DayElement";
import {DateContext} from "../App";
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
                                <div key={value.getTime()} onClick={() => setSelectedDay(value)}>
                                    <DayElement date={value} selected={selectedDay}/>
                                </div>
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
  column-gap: 2.32em;
  row-gap: 4.72234em;
  margin-top: 4.123em;
  
    @media (max-width: 1200px) {
      column-gap: 1.32em;
        row-gap: 1.32em;
    }
  
    @media (max-width: 1000px) {
        column-gap: 0.73em;
        row-gap: 0.73em;
    }
  
    @media (max-width: 756px) {
        column-gap: 0.5em;
        row-gap: 0.5em;
    }
`

export default Calendar;