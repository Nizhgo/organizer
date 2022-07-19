import React from "react";
import Calendar from "./calendar/Calendar";
import ControlPanel from "./calendar/controlPanel/ControlPanel";
import SidePanel from "./sidePanel/SidePanel";
import {PageMain} from './style'

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
