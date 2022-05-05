import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import DayElement from "./DayElement";
import RightPanel from "../RightPanel/RightPanel";
import {DateContext} from "../App";

const Calendar = () =>
{
    const {selectedDay, setSelectedDay, nowDate} = useContext(DateContext);
    return(
        <>
            <CalendarContainer>
                <WeekGrid>
                    {
                        GetArrayOfDaysForMonths().map(value => {
                            return(
                                <div key={value.getTime()} onClick={() => setSelectedDay(value)}>
                                    <DayElement date={value} selected={selectedDay}/>
                                </div>
                            );
                        })
                    }
                </WeekGrid>
            </CalendarContainer>
        </>
    )
}

const WeekGrid = styled.div`
  display: grid;
  width: min-content;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 2.32em;
  row-gap: 4.72234em;
`

const CalendarContainer = styled.div`
margin-top: 4.123em;
`

function GetArrayOfDaysForMonths(): Date[]{
    const date = new Date();
    let days: Date[] = [];
    const year = date.getFullYear();
    const month = date.getMonth();
    let startDate =  new Date(year, month);
    for (let i = 0; i < 42; i++)
    {
        let tmp: Date = new Date();
        tmp.setDate(startDate.getDate() - (6 - startDate.getDay()) + i);
        days.push(tmp);
        if (tmp.getMonth() > month && tmp.getDay() === 0)
        {
            break;
        }
    }
    return days;
}

export default Calendar;