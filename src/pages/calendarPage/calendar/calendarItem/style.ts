import styled from "styled-components";
import {ISelected} from "./interfaces";

const DayElementContainer = styled.div<ISelected>`
    display: flex;
    width: 100%;
    justify-items: start;
    align-content: start;

`
const DayElementLine = styled.line`
  display: block;
  height: 2px;
  width: 100%;
  background-color: black;
`
const Date = styled.h3<ISelected>`
  font-family: "Lineatura", sans-serif;
  margin-top: -13px;
  font-size: 36px;
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
  font-size: 13px;
  color: ${(props) => (props.isSelected ? '#DA654D' : 'black')};

  @media (max-width: 768px) {
    align-items: center;
  }
`

const DayElementWrapper = styled.div<ISelected>`
  pointer-events: ${(props) => (props.isSelectedMonth ? 'auto' : 'none')};
  padding: 4px;
  cursor: pointer;  
  aspect-ratio: 10/16;
  border-top: 2px solid #090909;
  display: flex;
  flex-direction: column;
  justify-items: start;
  align-items: start;
  background: ${(props) => (props.isSelected ? 'rgba(208, 172, 172, 0.1);' : 'transparent')};
  transition: all 0.2s ease-in-out;
  opacity: ${(props) => (props.isSelectedMonth ? '1' : '0.4353')};
  scale: ${(props) => (props.isSelected ? '1.1' : '1')};
  border-radius: 0 0 10px 10px;
  :hover {
  background: rgba(208, 172, 172, 0.05);
    }
  width: 100%;
  height: 100%;
`

export {DayElementWrapper, DayElementContainer, DayElementLine, Date, WeekDayTitle}