import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import getWeekDay from "../WeekDayTitle";
import AddElement from "./AddElement";
import {AddElementBtn, SmallButton} from "../SharedCopmponents/Buttons";
import {DateContext} from "../App";
import DailyTaskCard from "./DailyTaskCard";
import {AuthContext} from "../Auth/AuthContext";


const RightPanel = () =>
{
    const {isAuth} = useContext(AuthContext);
    const {selectedDay} = useContext(DateContext);
    const [isAddingNewElement, setIsAddingNewElement] = useState<boolean>(false);
    const [toDoList, setToDoList] = useState<any>('');
    const dateYYYYMMDD = `${selectedDay.getFullYear()}-${selectedDay.toLocaleString('ru', {
    month: '2-digit'
})}-${selectedDay.toLocaleString('ru', {
    day: '2-digit'
})}`;
    useEffect( () => {
        console.log(dateYYYYMMDD);
        fetch('http://localhost/organizer/getToDoListForDay.php', {
            method: 'post',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(
                {date: dateYYYYMMDD}
            )
        }).then(promiseResult => {
            return promiseResult.text()
        })
            .then(responseResult => {setToDoList(JSON.parse(responseResult))})
    }, );
    const day = selectedDay.toLocaleString('ru', {
        day: 'numeric'
    })
    const month = selectedDay.toLocaleString('ru', {
        month: 'long'
    }).slice(0, -1) + 'я';
    return(
        <RightPanelContainer>
            <DayTitle>
                {`${day} ${month}, ${getWeekDay(selectedDay)}`}
            </DayTitle>
                <ToDoListTitle>
                    Список дел:
                </ToDoListTitle>
                {
                    toDoList.length > 0 ?
                        <>
                            {toDoList.map((obj: { id: number; date: Date; title: string; body: string; timestamp: Date}) =>
                            {
                               return <DailyTaskCard id={obj.id} date={obj.date} title={obj.title} body={obj.body} timestamp={obj.timestamp} key={obj.id}/>
                            })}
                        </>
                        : <>
                        <p style={{marginTop:'2em'}}>на этот день нет никаких дел!😊</p>
                    </>
                }
                {isAuth && (
                    isAddingNewElement ?
                        <AddElement/>
                        :
                        <AddElementBtn onClick={() =>setIsAddingNewElement(prev => !prev)}>Добавить</AddElementBtn>
                )
                    }
        </RightPanelContainer>

    )
}

const RightPanelContainer = styled.div`
  padding: 1em;
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 0;
  height: 100%;
  width: 359px;
  background: white;
  border-left: 3px solid #E1E1E1;
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