import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import {getWeekDay} from "../Scripts/GetWeekDayTitle";
import AddElement from "./AddElement";
import {AddElementBtn} from "../SharedCopmponents/Buttons";
import DailyTaskCard from "./DailyTaskCard";
import {OrganizerContext} from "../Providers/OrganizerContext";
import {ITask} from "../Providers/OrganizerContext";
import {DateContext} from "../Providers/DataContext";
import {GetMonthTitleInCase} from "../Scripts/GetMonthTitle";


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
    const month = GetMonthTitleInCase(selectedDay);

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
  position: relative;
  overflow-y:auto;
  padding: 1em;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-left: 3px solid #E1E1E1;
  
    @media (max-width: 968px) {
      border-left: none;
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