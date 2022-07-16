import React, {useContext, useMemo} from "react";
import Calendar from "./calendar/Calendar";
import {DateContext} from "../../components/providers/DataContext";
import {GetMonthTitle} from "../../scripts/GetMonthTitle";
import {MonthTitle} from './style'
import SidePanel from "./sidePanel/SidePanel";

const CalendarPage = () => {
    const {nowDate} = useContext(DateContext);
    const month = useMemo(() => GetMonthTitle(nowDate), [nowDate]);
    const year = useMemo(() => nowDate.getFullYear(), [nowDate]);
    return (
        <>
            <div>
                <MonthTitle>{year}, {
                    month
                }</MonthTitle>
                <Calendar/>
            </div>
            <SidePanel/>
        </>
    )
}

export default CalendarPage;
