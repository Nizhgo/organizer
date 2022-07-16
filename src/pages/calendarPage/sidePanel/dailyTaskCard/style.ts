import styled from "styled-components";

const CardTitle = styled.h6`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
  line-height: 98.9%;
  color: #323232;
`

const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4em;
  border-radius: 5px;
`

const DailyTaskMenuIcon = styled.img`
  height: 18px;
  width: 18px;
  border-radius: 24px;
  transition: all 1s ease-in-out;

  :hover {
    background-color: #efefef;
  }

`

const CardBody = styled.p`
  padding-top: 10px;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 98.9%;
  color: #858585;
`

const DailyTaskGridContainer = styled.div`
  display: grid;
  grid-template-columns: 8fr 1fr;

`

const DailyTaskContainer = styled.div`
  display: flex;
  flex-direction: column`


export {CardTitle, TaskContainer, DailyTaskMenuIcon, CardBody, DailyTaskGridContainer, DailyTaskContainer};