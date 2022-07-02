import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import getWeekDay from "../Scripts/WeekDayTitle";
import AddElement from "./AddElement";
import {AddElementBtn, SmallButton} from "../SharedCopmponents/Buttons";
import {DateContext} from "../App";
import DailyTaskCard from "./DailyTaskCard";
import {OrganizerContext} from "../Auth/OrganizerContext";
import {ITask} from "../Auth/OrganizerContext";


const RightPanel = () =>
{
    const {GetTaskByDayMothAndYear, AddTask, DeleteTask, GetTasks} = useContext(OrganizerContext);
    const {selectedDay} = useContext(DateContext);
    const [isAddingNewElement, setIsAddingNewElement] = useState<boolean>(false);
    const [toDoList, setToDoList] = useState<ITask[]>(GetTaskByDayMothAndYear(selectedDay));
//     const dateYYYYMMDD = `${selectedDay.getFullYear()}-${selectedDay.toLocaleString('ru', {
//     month: '2-digit'
// })}-${selectedDay.toLocaleString('ru', {
//     day: '2-digit'
// })}`;

    const day = selectedDay.toLocaleString('ru', {
        day: 'numeric'
    })
    const month = selectedDay.toLocaleString('ru', {
        month: 'long'
    }).slice(0, -1) + 'я';

    useEffect(() =>
    {
        setToDoList(GetTaskByDayMothAndYear(selectedDay));
    }, [GetTasks]);

    return(
        <RightPanelContainer>
            {GetTasks}
            <DayTitle>
                {`${day} ${month}, ${getWeekDay(selectedDay)}`}
            </DayTitle>
                <ToDoListTitle>
                    Список дел:
                </ToDoListTitle>
                {
                    toDoList.length > 0 ?
                        <>
                            {toDoList.map((obj) =>
                            {
                               return <DailyTaskCard id={obj.id} title={obj.title} body={obj.body} timestamp={obj.timestamp} key={obj.id}/>
                            })}
                        </>
                        : <>
                        <p style={{marginTop:'2em'}}>на этот день нет никаких дел!😊</p>
                    </>
                }
                {
                    isAddingNewElement ?
                        <AddElement/>
                        :
                        <AddElementBtn onClick={() =>setIsAddingNewElement(prev => !prev)}>Добавить</AddElementBtn>
                    }
        </RightPanelContainer>

    )
}

const RightPanelContainer = styled.div`
  overflow-y:auto;
  padding: 1em;
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 0;
  height: 100%;
  max-width: 359px;
  width: 100%;
  background: white;
  border-left: 3px solid #E1E1E1;
  
    @media (max-width: 1100px) {
    max-width: 300px;
    }
  
    @media (max-width: 1000px) {
    max-width: 250px;
    }
`
const DayTitle = styled.p`
  margin-top: 1em;
  font-size: 36px;
  max-width: 200px;
  line-height: 100%;
  color: #DA654D;
`

const ToDoListTitle = styled.p`
  margin-top: 3.783em;
  font-size: 20px;
  line-height: 98.9%;
  color: #777777;

`

export default RightPanel;