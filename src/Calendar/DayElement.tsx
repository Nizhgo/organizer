import React, {useState} from "react";
import styled from "styled-components";
import getWeekDay from "../Scripts/WeekDayTitle";

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
  padding: 10px;
  max-width: 90px;
  aspect-ratio: 90/141;
  width: 100%;
  gap: 1.7238em;
  border-radius: 12px;
  background: ${(props) => (props.isSelected ? 'rgba(208, 172, 172, 0.1);' : 'transparent')};
  scale: ${(props) => (props.isSelected ? '1.15' : 'none')};
  transition: all 0.2s ease-in-out;
  pointer-events: stroke;
  
  @media (max-width: 768px) {
    gap: 1.2em;
  }
  
    @media (max-width: 576px) {  
      scale: none;
    gap: 0.9em;
    }
  
    @media (max-width: 480px) {
    gap: 0.73em;
    }
  
    @media (max-width: 360px) {
    gap: 0.5em;
    }
`
const DayElementLine = styled.line`
  display: block;
  height: 2px;
  width: 100%;
  background-color: black;
`
const DatTitle = styled.h3<ISelected>`
  font-size: 40px;
  line-height: 98.9%;
  color: ${(props) => (props.isSelected ? '#DA654D' : 'black')};
  
  @media (max-width: 768px) {
    font-size: 30px;
  }
  
  @media (max-width: 576px) {
    font-size: 20px;
  }
  
    @media (max-width: 375px) {
    font-size: 15px;
    }
  
`

const WeekDayTitle = styled.p<ISelected>`
  font-size: 14px;
  color: ${(props) => (props.isSelected ? '#DA654D' : 'black')};
  
    @media (max-width: 768px) {
    font-size: 12px;
    }
  
    @media (max-width: 576px) {
    font-size: 10px;
    }
  
    @media (max-width: 375px) {
    font-size: 8px;
    }
`

export default DayElement;