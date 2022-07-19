import styled from "styled-components";

const CalendarContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  grid-template-columns: repeat(7, 1fr);
  display: grid;
  row-gap: 2.72234em;
  column-gap: 1.4em;
  margin-top: 4.123em;
  animation: fadeIn 0.5s ease-in-out;

  @media (max-width: 1200px) {
    column-gap: 1.32em;
  }

  @media (max-width: 1000px) {
    column-gap: 0.73em;
  }

  @media (max-width: 756px) {
    column-gap: 0.3em;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

`
const WeekDayTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  box-sizing: border-box;



`


const WeekDayTitle = styled.h5`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #181818;
`


export {
	CalendarContainer,
	WeekDayTitleWrapper,
	WeekDayTitle
};