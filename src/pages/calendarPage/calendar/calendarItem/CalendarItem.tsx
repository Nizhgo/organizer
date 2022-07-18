import React, {memo, useContext, useEffect, useMemo, useState} from "react";
import {DateContext} from "../../../../components/providers/DataContext";
import {IDayElement} from "./interfaces";
import {Date, DayElementContainer, DayElementWrapper,} from "./style";
import useViewport from "../../../../hooks/useViewport";
import {ITask, OrganizerContext} from "../../../../components/providers/OrganizerContext";
import {Badge} from 'antd';
import styled from "styled-components";


const CalendarItem = memo((props: IDayElement) => {

    const {date} = props;
    const {selectedDay, setSelectedDay, dateShift} = useContext(DateContext);
    const isSelectedMonth = useMemo(() => date.getMonth() === selectedDay.getMonth(), [date, selectedDay]);
    const {GetTaskByDayMothAndYear} = useContext(OrganizerContext);
    const tasks = GetTaskByDayMothAndYear(date);
    //not completed tasks count
    const taskCount = useMemo(() => tasks.length, [tasks]);
    const notCompletedTasksCount = useMemo(() => tasks.filter((task: ITask) => !task.isDone).length, [tasks]);
    const isSelected = useMemo(() => date.getTime() === selectedDay.getTime(), [date, selectedDay]);
    const [isShort, setIsShort] = useState<boolean>(false);
    const {width} = useViewport();

    useEffect(() => {
        if (width < 968) {
            setIsShort(true);
        } else {
            setIsShort(false);
        }
    }, []);

    return (
        <DayElementWrapper key={date.getTime()} onClick={() => setSelectedDay(date)} isSelected={isSelected}
                           isSelectedMonth={isSelectedMonth}>
            <DayBadgeContainer>
                {notCompletedTasksCount > 0 && <DayBadge count={notCompletedTasksCount} size={'small'}/>}
            </DayBadgeContainer>
            <DayElementContainer isSelected={isSelected}>
                <Date isSelected={isSelected}>{date.toLocaleString('ru', {
                    day: '2-digit'
                })}</Date>
            </DayElementContainer>
            {!isShort &&
                <TasksContainer>
                    {taskCount > 0 ? <TaskTitle isDone={tasks[0].isDone}>{tasks[0].title}</TaskTitle> : ''}
                    {taskCount > 1 ? <TaskTitle isDone={tasks[1].isDone}>{tasks[1].title}</TaskTitle> : ''}
                    {taskCount > 2 ? <TaskTitle style={{fontSize: '8px', textDecoration: 'underline'}}>И
                        еще {taskCount - 2}...</TaskTitle> : ''}
                </TasksContainer>
            }

        </DayElementWrapper>
    )
});


const DayBadge = styled(Badge)`
  font-family: 'Raleway', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  align-items: center;
  padding-top: 0.3px;
  justify-content: center;
`

const DayBadgeContainer = styled.div`
  margin-top: 5px;
  width: 100%;
  height: 18px;
  display: flex;
  justify-content: end;
  align-items: center;
`

const TasksContainer = styled.div`
  margin-top: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1em;
`

const TaskTitle = styled.p<{ isDone?: boolean }>`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 98.9%;
  color: #858585;
  text-decoration: ${props => props.isDone ? 'line-through' : 'none'};
`


export {CalendarItem};