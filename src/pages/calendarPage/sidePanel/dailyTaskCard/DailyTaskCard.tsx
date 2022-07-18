import React, {useContext, useEffect, useState} from "react";
import {Card} from "../../../../ui/Card";
import Checkbox from "../../../../ui/Checkbox";
import {Button, Input, Popover, message, Popconfirm} from 'antd';
import {ITask, OrganizerContext} from "../../../../components/providers/OrganizerContext";
import {
    MoreOutlined,
} from '@ant-design/icons'

import styled from "styled-components";
import AddElementForm from "../addElementForm/AddElementForm";


const DailyTaskCard = (props: ITask) => {
    const {DeleteTask, CompleteTask} = useContext(OrganizerContext);
    const {title, body, isDone} = props;
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const Delete = async () => {
        DeleteTask(props);
            message.success('Задача удалена!');
    };


    const Edit = () => {
        setIsEdit(true);
    }

    const Complete = () => {
        CompleteTask(props);
        if (!isDone) {
            message.success('Задача выполнена!');
        }
    }

    const PopoverMenu = () =>
    {
        return (
            <div>
                <Popconfirm title="Вы уверены?" okText={'Да, удалить'} cancelText={'Нет'} onConfirm={Delete}>
                <PopoverItem style={{color: 'indianred'}}>Удалить</PopoverItem>
                </Popconfirm>
                <PopoverItem onClick={Edit}>Редактировать</PopoverItem>
            </div>
        )
    }

    return (
        <>
            {isEdit ?
                <AddElementForm setIsEdit={setIsEdit} task={props}/>
                :
                <Card>
                    <DailyTaskWrapper>
                        <DailyTaskGridContainer>
                            <IconContainer>
                                <Checkbox onChange={Complete} checked={isDone}/>
                            </IconContainer>
                            <TaskInfoContainer isComplete={isDone || false}>
                                <TaskTitle>{title}</TaskTitle>
                                <TaskBody>{body}</TaskBody>
                            </TaskInfoContainer>
                            <IconContainer>
                                <Popover content={PopoverMenu}>
                                    <MoreOutlined height={'32px'} width={'32px'}/>
                                </Popover>
                            </IconContainer>
                        </DailyTaskGridContainer>
                    </DailyTaskWrapper>
                </Card>
            }
    </>
    )
    }
const DailyTaskWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

const DailyTaskGridContainer = styled.div`
  display: grid;
  width: 100%;
  text-align: start;
    grid-template-columns: 32px auto 32px;
    grid-gap: 6px;
`

const PopoverItem = styled.p`
    cursor: pointer;
  color: black;
    :hover {
        color: #6024de;
    }
    animation: 0.5s ease-in-out;
`
const IconContainer = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    width: 32px;
    height: 32px;
    `


const TaskInfoContainer = styled.div<{isComplete: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 100%;
    gap: 0.5em;
    text-decoration: ${props => props.isComplete ? 'line-through' : 'none'};
    `

const TaskTitle = styled.h6`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 113%;
  color: #000000;
`

const TaskBody = styled.p`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 113%;
  color: #515151;
`





export default DailyTaskCard;