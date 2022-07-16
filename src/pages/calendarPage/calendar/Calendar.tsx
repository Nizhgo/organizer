import React, {useContext, useMemo} from "react";
import {DateContext} from "../../../components/providers/DataContext";
import GetArrayOfDaysForMonths from "../../../scripts/GetArrayOfDaysForMonths";
import {CalendarContainer} from "./style";
import {CalendarItem} from "./calendarItem/CalendarItem";

const Calendar = () => {
    const {selectedDay, setSelectedDay} = useContext(DateContext);
    const arrayOfDays = useMemo<Date[]>(() => GetArrayOfDaysForMonths(selectedDay), []);
    return useMemo(() => (
        <>
            <CalendarContainer>
                {
                    arrayOfDays.map(value => {
                        return (
                                <CalendarItem date={value}/>
                        );
                    })
                }
            </CalendarContainer>
        </>
    ), [arrayOfDays, setSelectedDay]);

}


export default Calendar;