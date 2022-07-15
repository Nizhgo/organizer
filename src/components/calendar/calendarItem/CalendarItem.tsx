import React, {memo, useContext, useEffect, useMemo, useState} from "react";
import {getShortWeekDay, getWeekDay} from "../../../scripts/GetWeekDayTitle";
import {DateContext} from "../../providers/DataContext";
import {IDayElement} from "./interfaces";
import{
    DayElementContainer,
    DayElementLine,
    Date,
    WeekDayTitle
} from "./style";


const CalendarItem = memo((props: IDayElement) =>
{

    const {date} = props;
    const {selectedDay} = useContext(DateContext);
    const isSelected = useMemo(() => date.getTime() === selectedDay.getTime(), [date, selectedDay]);
    const [isShort, setIsShort] = useState<boolean>(false);

    useEffect(() =>
    {
        if(window.innerWidth < 968)
        {
            setIsShort(true);
        }
        else
        {
            setIsShort(false);
        }
    }, []);

        return useMemo(() => (
            <DayElementContainer isSelected={isSelected}>
                <WeekDayTitle isSelected={isSelected}>{isShort? getShortWeekDay(date) : getWeekDay(date)}</WeekDayTitle>
                <DayElementLine/>
                <Date isSelected={isSelected}>{date.toLocaleString('ru', {
                    day: '2-digit'
                })}</Date>
            </DayElementContainer>
        ), [isShort, isSelected]);
});





export {CalendarItem};