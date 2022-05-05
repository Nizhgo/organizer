import React from "react";
import styled from "styled-components";
import getWeekDay from "../WeekDayTitle";

interface IDayElement {
    date: Date;
    selected: Date;
}
const DayElement = (props: IDayElement) =>
{
    const {date, selected} = props;
    const isSelected = (date.getDate()) === selected.getDate() && date.getMonth() === selected.getMonth() && date.getFullYear() === selected.getFullYear();
    return(
        <DayElementContainer isSelected={isSelected}>
            <WeekDayTitle isSelected={isSelected}>{getWeekDay(date)}</WeekDayTitle>
            <DayElementLine/>
            <DatTitle isSelected={isSelected}>{date.toLocaleString('ru', {
                day: '2-digit'
            })}</DatTitle>
        </DayElementContainer>
    )
}

interface ISelected {
    isSelected?: boolean
}
const DayElementContainer = styled.div<ISelected>`
  display: flex;
  flex-direction: column;
  height: 141px;
  padding: 10px;
  width: 90px;
  gap: 1.7238em;
  border-radius: 12px;
  background: ${(props) => (props.isSelected ? 'rgba(208, 172, 172, 0.1);' : 'transparent')};
  scale: ${(props) => (props.isSelected ? '1.15' : 'none')};
  transition: all 1s ease-in-out;
  pointer-events: stroke;
`
const DayElementLine = styled.line`
  height: 2px;
  width: 100%;
  background-color: black;
`
const DatTitle = styled.h3<ISelected>`
  font-size: 40px;
  line-height: 98.9%;
  color: ${(props) => (props.isSelected ? '#DA654D' : 'black')};
  
`

const WeekDayTitle = styled.p<ISelected>`
  font-size: 14px;
  color: ${(props) => (props.isSelected ? '#DA654D' : 'black')};
`

export default DayElement;