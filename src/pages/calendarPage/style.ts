import styled from "styled-components";

const MonthTitle = styled.h2`
  font-size: 36px;
  color: black;
  margin-top: 1em;
`

const OverviewContainer = styled.div`
  display: grid;
  grid-template-columns: 8fr 2.5fr;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`

export {MonthTitle, OverviewContainer};