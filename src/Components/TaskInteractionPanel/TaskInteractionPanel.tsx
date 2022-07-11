import React, {useContext, useEffect, useMemo, useState} from "react";
import styled from "styled-components";
import {getWeekDay} from "../../Scripts/GetWeekDayTitle";
import AddElement from "./AddElement";
import {AddElementBtn} from "../../SharedCopmponents/Buttons";
import DailyTaskCard from "./DailyTaskCard";
import {OrganizerContext} from "../Providers/OrganizerContext";
import {ITask} from "../Providers/OrganizerContext";
import {DateContext} from "../Providers/DataContext";
import {GetMonthTitleInCase} from "../../Scripts/GetMonthTitle";
import CloseIcon from "../../Assets/Images/close_FILL0_wght400_GRAD0_opsz48.svg"


const TaskInteractionPanel = () =>
{
    const {GetTaskByDayMothAndYear, GetTasks} = useContext(OrganizerContext);
    const {selectedDay} = useContext(DateContext);
    const [isAddingNewElement, setIsAddingNewElement] = useState<boolean>(false);
    const [toDoList, setToDoList] = useState<ITask[]>(GetTaskByDayMothAndYear(selectedDay));
    const [isShow, setIsShow] = useState<boolean>(false);

    const day = useMemo(() => selectedDay.toLocaleString('ru', {
        day: 'numeric'
    }), [selectedDay]);

    const month = useMemo(() => GetMonthTitleInCase(selectedDay), [selectedDay]);

    const dayTitle = useMemo(() => `${day} ${month}, ${getWeekDay(selectedDay)}`, [day, month, selectedDay]);


    useEffect(() =>
    {
        setIsShow(true);
    }, [selectedDay]);

    useEffect(() =>
    {
        setToDoList(GetTaskByDayMothAndYear(selectedDay));
    }, [GetTaskByDayMothAndYear, selectedDay]);


    useEffect(() =>
    {
        setIsShow(false)
    }, []);


    return useMemo(() => (
        <RightPanelContainer isShown={isShow}>
            <CloseIconContainer onClick={() => setIsShow(false)}>
                <img src={CloseIcon} alt={'закрыть'}/>
            </CloseIconContainer>
            <DayTitle>
                {dayTitle}
            </DayTitle>
                <ToDoListTitle>
                    Список дел:
                </ToDoListTitle>
                {
                    toDoList.length > 0 ?
                        <>
                            {toDoList.map((obj) =>
                            {
                               return <DailyTaskCard
                                   id={obj.id}
                                   title={obj.title}
                                   body={obj.body}
                                   timestamp={obj.timestamp}
                                   key={obj.id}/>
                            })}
                        </>
                        :
                        <>
                        <p
                            style={{marginTop:'2em'}}>
                            на этот день нет никаких дел!😊
                        </p>
                    </>
                }
                {
                    isAddingNewElement ?
                        <AddElement/>
                        :
                        <AddElementBtn onClick={() =>setIsAddingNewElement(prev => !prev)}>Добавить</AddElementBtn>
                    }
        </RightPanelContainer>

    ), [isAddingNewElement, isShow, toDoList, dayTitle]);
}

interface IRightPanelContainerProps{
    isShown: boolean;
}

const RightPanelContainer = styled.div<IRightPanelContainerProps>`
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
    z-index: 1;
    width: 100%;
    height: 100%;
    position: fixed;
    background: #fff;
    display: ${(props) => (props.isShown ? 'block' : 'none')};
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

const CloseIconContainer = styled.div`
    position: fixed;
    top: 1.5em;
    right: 1.5em;
    cursor: pointer;
    width: 1.5em;
    height: 1.5em;
    display: none;
    @media (max-width: 968px) {
      display: block;
    }
`


export default TaskInteractionPanel;