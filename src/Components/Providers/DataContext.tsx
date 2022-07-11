import React, {createContext, useState} from "react";

export const DateContext = createContext<any | null>(null);

const DateProvider = ({children}: any) =>
{
    const [selectedDay, setSelectedDay] = useState(new Date());
    const nowDate = new Date();
    return (
        <DateContext.Provider value={{selectedDay, setSelectedDay, nowDate}}>
            {children}
        </DateContext.Provider>
    )
}

export default DateProvider;