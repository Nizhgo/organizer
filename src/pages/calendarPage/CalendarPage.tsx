import React, {useContext, useMemo} from "react";
import Calendar from "./calendar/Calendar";
import {DateContext} from "../../components/providers/DataContext";
import {GetMonthTitle} from "../../scripts/GetMonthTitle";
import {MonthTitle} from './style'
import SidePanel from "./sidePanel/SidePanel";
import styled from "styled-components";

const CalendarPage = () => {
    const {nowDate} = useContext(DateContext);
    const month = useMemo(() => GetMonthTitle(nowDate), [nowDate]);
    const year = useMemo(() => nowDate.getFullYear(), [nowDate]);
    return (
        <>
            <PageMain>
                <MonthTitle>{year}, {
                    month
                }</MonthTitle>
                <Calendar/>
            </PageMain>
            <SidePanel/>
        </>
    )
}

const PageMain = styled.div`
display: flex;
flex-direction: column;
  width: 100%;
`

export default CalendarPage;
