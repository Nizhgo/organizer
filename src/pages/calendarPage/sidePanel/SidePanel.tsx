import React, {useContext, useEffect, useMemo, useState} from "react";
import {getWeekDay} from "../../../scripts/GetWeekDayTitle";
import AddElementForm from "./addElementForm/AddElementForm";
import {Button} from "antd";
import DailyTaskCard from "./dailyTaskCard/DailyTaskCard";
import {ITask, OrganizerContext} from "../../../components/providers/OrganizerContext";
import {DateContext} from "../../../components/providers/DataContext";
import {GetMonthTitleInCase} from "../../../scripts/GetMonthTitle";
import CloseIcon from "../../../assets/images/close_FILL0_wght400_GRAD0_opsz48.svg"
import {CloseIconContainer, DayTitle, RightPanelContainer, ToDoListTitle} from "./style";


const SidePanel = () => {
    const {GetTaskByDayMothAndYear} = useContext(OrganizerContext);
    const {selectedDay} = useContext(DateContext);
    const [isAddingNewElement, setIsAddingNewElement] = useState<boolean>(false);
    const [toDoList, setToDoList] = useState<ITask[]>(GetTaskByDayMothAndYear(selectedDay));
    const [isShow, setIsShow] = useState<boolean>(false);

    const day = useMemo(() => selectedDay.toLocaleString('ru', {
        day: 'numeric'
    }), [selectedDay]);

    const month = useMemo(() => GetMonthTitleInCase(selectedDay), [selectedDay]);

    const dayTitle = useMemo(() => `${day} ${month}, ${getWeekDay(selectedDay)}`, [day, month, selectedDay]);


    useEffect(() => {
        setIsShow(true);
    }, [selectedDay]);

    useEffect(() => {
        setToDoList(GetTaskByDayMothAndYear(selectedDay));
    }, [GetTaskByDayMothAndYear, selectedDay]);


    useEffect(() => {
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
            {isAddingNewElement ? <AddElementForm  setIsEdit={setIsAddingNewElement}/> : <Button onClick={() => setIsAddingNewElement(true)}>Добавить новое дело</Button>}
            <ToDoListTitle>
                Список дел:
            </ToDoListTitle>
            {
                toDoList.length > 0 ?
                    <>
                        {toDoList.map((obj) => {
                            return <DailyTaskCard
                                id={obj.id}
                                title={obj.title}
                                body={obj.body}
                                timestamp={obj.timestamp}
                                key={obj.id}
                                isDone={obj.isDone || false}
                            />

                        })}
                    </>
                    :
                    <>
                        <p
                            style={{marginTop: '2em'}}>
                            на этот день нет никаких дел!😊
                        </p>
                    </>
            }
        </RightPanelContainer>

    ), [isShow, dayTitle, toDoList, isAddingNewElement]);
}


export default SidePanel;