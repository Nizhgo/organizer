import React, {createContext, useCallback, useEffect, useMemo, useState} from "react";

export const OrganizerContext = createContext<any | null>(null);

export interface ITask {
    id: string,
    title: string,
    body: string,
    timestamp: Date,
}
export const OrganizerProvider = ({children}: any) =>
{
    const GetTaskFromLocalStorage = (): ITask[] =>
    {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
            return JSON.parse(tasks);
        }
        return [];
    }

    const [tasks, setTasks] = useState<ITask[]>(GetTaskFromLocalStorage);



    const SaveTasksToLocalStorage = useCallback(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        console.log('tasks saved to localStorage, tasks:', tasks);
    }, [tasks]);


    useEffect(() => {
        SaveTasksToLocalStorage();
    }, [tasks, SaveTasksToLocalStorage]);

    const AddTask = (task: ITask) =>
    {
        setTasks(prev => [...prev, task]);
        console.log('task added', task);
        console.log('task added /// all tasks', tasks);
    }

    const DeleteTask = (task: ITask) =>
    {
        setTasks(tasks.filter(t => t.id !== task.id));
    }

    const UpdateTask = (task: ITask) =>
    {
        const newTasks = tasks.map(t => t.id === task.id ? task : t);
        setTasks(newTasks);
    }

    const GetTasks = () =>
    {
        return tasks;
    }

    const GetTaskByDayMothAndYear = (day: Date) =>
    {
        console.log('day:', day.getDate, 'month:', day.getMonth(), 'year:', day.getFullYear());
        console.log()
        return tasks.filter(t => new Date(t.timestamp).getDate() === day.getDate() && new Date(t.timestamp).getMonth() === day.getMonth() && new Date(t.timestamp).getFullYear() === day.getFullYear());
    }


    return (
        <OrganizerContext.Provider value={{
            AddTask, DeleteTask, UpdateTask, GetTasks, GetTaskByDayMothAndYear
        }}>
            {children}
        </OrganizerContext.Provider>
    );
}