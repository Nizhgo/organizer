import styled from "styled-components";

const RightPanelContainer = styled.div<IRightPanelContainerProps>`
  position: sticky;
  overflow-y: auto;
  padding: 1em;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-left: 3px solid #f1f1f1;
  @media (max-width: 968px) {
    z-index: 1;
    width: 100%;
    height: 100%;
    position: fixed;
    background: #fff;
    top: 0;
    right: 0;
    display: ${(props) => (props.isShown ? 'block' : 'none')};
  }


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

const CloseIconContainer = styled.div`
  position: fixed;
  top: 1.5em;
  right: 1.5em;
  cursor: pointer;
  width: 1.5em;
  height: 1.5em;
  display: none;
  @media (max-width: 968px) {
    display: block;
  }
`

interface IRightPanelContainerProps {
    isShown: boolean;
}

export {RightPanelContainer, DayTitle, ToDoListTitle, CloseIconContainer};