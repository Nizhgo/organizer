import styled from "styled-components";

const CalendarContainer = styled.div`
  width: 100%;
  grid-template-columns: repeat(7, 1fr);
  display: grid;
  column-gap: normal;
  row-gap: 1.72234em;
  margin-top: 4.123em;

  @media (max-width: 1200px) {
    column-gap: 1.32em;
  }

  @media (max-width: 1000px) {
    column-gap: 0.73em;
  }

  @media (max-width: 756px) {
    column-gap: 0.3em;
  }
`


export {CalendarContainer};