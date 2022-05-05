import React from "react";
import Card from "../SharedCopmponents/Card";
import styled from "styled-components";

interface IDailyTaskCard{
    id: number,
    date: Date,
    title: string,
    body: string,
    timestamp: Date,
}
const DailyTaskCard = (props: IDailyTaskCard) =>
{
    const {title, body} = props;
    return(
        <Card>
            <DailyTaskContainer>
                <CardTitle>{title}</CardTitle>
                <CardBody>{body}</CardBody>
            </DailyTaskContainer>

        </Card>
    )
}

const CardTitle = styled.h6`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
  line-height: 98.9%;
  color: #323232;
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

const DailyTaskContainer = styled.div`
display: flex;
flex-direction: column`

export  default DailyTaskCard;