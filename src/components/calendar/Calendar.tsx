import React, {useContext, useEffect, useMemo, useRef, useState} from "react";
import {DateContext} from "../providers/DataContext";
import GetArrayOfDaysForMonths from "../../scripts/GetArrayOfDaysForMonths";
import {CalendarContainer, DayElementWrapper} from "./style";
import {CalendarItem} from "./calendarItem/CalendarItem";

const Calendar = () =>
{
    const {selectedDay, setSelectedDay} = useContext(DateContext);
    const arrayOfDays = useMemo<Date[]>(() => GetArrayOfDaysForMonths(selectedDay), []);
    return useMemo(() => (
        <>
            <CalendarContainer>
                {
                    arrayOfDays.map(value => {
                        return(
                            <DayElementWrapper key={value.getTime()} onClick={() => setSelectedDay(value)}>
                                <CalendarItem date={value}/>
                            </DayElementWrapper>

                        );
                    })
                }
            </CalendarContainer>
        </>
    ), [arrayOfDays, setSelectedDay]);

}


export default Calendar;