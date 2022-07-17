import styled from "styled-components";

const ControlPanelWrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-shrink: 0;
    align-items: center;
    justify-content: start;
    gap: 1em;
  
  @media (max-width: 968px) {
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 0.5em;
  }
    `

const MonthTitle = styled.h2`
  font-family: "Lineatura", sans-serif;
  width: 350px;
  text-align: start;
  white-space: nowrap;
  margin-bottom: 20px;
  line-height: 100%;
  font-size: 32px;
  color: black;
`

const NavControls = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    `

export { ControlPanelWrapper, MonthTitle, NavControls };