import React, {createContext, useEffect, useState} from "react";

export const DateContext = createContext<any | null>(null);

const DateProvider = ({children}: any) => {
    const [selectedDay, setSelectedDay] = useState<Date>(new Date());
    // date shift
    const [dateShift, setDateShift] = useState<Date | null>(null);
    useEffect(() => {
        if (dateShift) {
            setSelectedDay(dateShift);
        }
    }, [dateShift]);
    return (
        <DateContext.Provider value={{selectedDay, setSelectedDay, setDateShift, dateShift}}>
            {children}
        </DateContext.Provider>
    )
}

export default DateProvider;