import React from "react";
import Calendar from "./calendar/Calendar";
import {PageMain} from './style'
import SidePanel from "./sidePanel/SidePanel";
import ControlPanel from "./calendar/controlPanel/ControlPanel";

const CalendarPage = () => {
    return (
        <>
            <PageMain>
                <ControlPanel/>
                <Calendar/>
            </PageMain>
            <SidePanel/>
        </>
    )
}


export default CalendarPage;
