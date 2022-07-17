import React from 'react';
import AppLayout from "./layout/AppLayout";
import CalendarPage from "./pages/calendarPage/CalendarPage";
import AddTask from "./pages/addTask/AddTask";

function App() {
    return (
        <AppLayout>
            <AddTask/>
        </AppLayout>
    )
}

export default App;
