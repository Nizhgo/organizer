import React, {useContext, useEffect, useState} from "react";
import {DateContext} from "../../../components/providers/DataContext";
import GetArrayOfDaysForMonths from "../../../scripts/GetArrayOfDaysForMonths";
import {CalendarContainer, WeekDayTitle, WeekDayTitleWrapper} from "./style";
import {CalendarItem} from "./calendarItem/CalendarItem";

const Calendar = () => {
    const {selectedDay, dateShift} = useContext(DateContext);
    const [arrayOfDays, setArrayOfDays] = useState<Date[]>(GetArrayOfDaysForMonths(selectedDay));
    const daysName = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    useEffect(() => {
        setArrayOfDays(GetArrayOfDaysForMonths(selectedDay));
    }, [dateShift, selectedDay]);
    return (
        <>
            <CalendarContainer>
                {
                    daysName.map((day, index) => (
                        <WeekDayTitleWrapper key={index}><WeekDayTitle>{day}</WeekDayTitle></WeekDayTitleWrapper>
                    ))
                }
                {
                    arrayOfDays.map(value => {
                        return (
                            <CalendarItem date={value}/>
                        );
                    })
                }
            </CalendarContainer>
        </>
    );

}


export default Calendar;