import React, {
	createContext,
	useState
} from "react";

export const DateContext = createContext<any | null>(null);

const DateProvider = ({children}: any) => {
	const [selectedDay, setSelectedDay] = useState<Date>(new Date());
	const [calendarMonth, setCalendarMonth] = useState<Date>(new Date());

	return (
		<DateContext.Provider value={{selectedDay, setSelectedDay, calendarMonth, setCalendarMonth}}>
			{children}
		</DateContext.Provider>
	)
}

export default DateProvider;