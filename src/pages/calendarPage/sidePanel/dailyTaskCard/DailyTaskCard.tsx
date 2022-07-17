import React, {useContext, useEffect, useState} from "react";
import {Card} from "../../../../ui/Card";
import Checkbox from "../../../../ui/Checkbox";
import EditIcon from '../../../../assets/images/edit_FILL0_wght400_GRAD0_opsz40.svg'
import DeleteIcon from '../../../../assets/images/delete_forever_FILL0_wght400_GRAD0_opsz40.svg'
import {Button, Input, Popover} from 'antd';
import {ITask, OrganizerContext} from "../../../../components/providers/OrganizerContext";
import {
    MoreOutlined,
} from '@ant-design/icons'

import {
    CardBody,
    CardTitle,
    DailyTaskContainer,
    DailyTaskMenuIcon,
    TaskContainer
} from "./style"
import {FormContainer} from "../sharedUI/style";
import styled from "styled-components";


const DailyTaskCard = (props: ITask) => {
    const {DeleteTask, UpdateTask} = useContext(OrganizerContext);
    const {title, body} = props;
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [titleText, setTitleText] = useState<string>(title);
    const [bodyText, setBodyText] = useState<string>(body);
    const Delete = async () => {
        DeleteTask(props);
    };


    useEffect(() => {
        if (!isEdit) {
            SaveEditedTask();
        }
    }, [isEdit]);

    const SaveEditedTask = () => {
        setIsEdit(false);
        if (titleText !== title || bodyText !== body) {
            UpdateTask({...props, title: titleText, body: bodyText});
        }
    }

    const Edit = () => {
        setIsEdit(true);
    }

    return (
        <Card>
            <DailyTaskWrapper>
                <DailyTaskGridContainer>
                    <IconContainer>
                        <Checkbox/>
                    </IconContainer>
                    <TaskInfoContainer>
                        <TaskTitle>{titleText}</TaskTitle>
                        <TaskBody>{bodyText}</TaskBody>
                        <TaskTime>17:20 — 18:40</TaskTime>
                    </TaskInfoContainer>
                    <IconContainer style={{paddingTop: '8px'}}>
                        <Popover content={<div><p onClick={Delete}>Удалить</p><p onClick={Edit}>Редактировать</p></div>}>
                    <MoreOutlined height={'32px'} width={'32px'}/>
                        </Popover>
                    </IconContainer>
                </DailyTaskGridContainer>
            </DailyTaskWrapper>
        </Card>
    )

    // return (
    //     <Card>
    //         <DailyTaskGridContainer>
    //             <DailyTaskContainer>
    //                 {
    //                     isEdit ?
    //                         <FormContainer>
    //                             <Input value={titleText} onChange={e => setTitleText(e.target.value)}/>
    //                             <Input value={bodyText} onChange={e => setBodyText(e.target.value)}/>
    //                             <Button onClick={() => setIsEdit(false)}>Cохранить</Button>
    //                         </FormContainer>
    //                         :
    //                         <TaskContainer>
    //                             <CardTitle>{titleText}</CardTitle>
    //                             <CardBody>{bodyText}</CardBody>
    //                         </TaskContainer>
    //                 }
    //             </DailyTaskContainer>
    //             <form style={{display: 'flex', alignItems: 'start', justifyContent: 'space-between'}}>
    //                 <button onClick={() => setIsEdit(prev => !prev)} type={'button'}><DailyTaskMenuIcon src={EditIcon}/>
    //                 </button>
    //                 <button onClick={Delete} type={'button'}><DailyTaskMenuIcon src={DeleteIcon}/></button>
    //             </form>
    //         </DailyTaskGridContainer>
    //
    //
    //     </Card>
    // )
}

const DailyTaskWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-top: 8px;
    padding-inline: 4px;
    padding-bottom: 8px;
`

const DailyTaskGridContainer = styled.div`
  display: grid;
  width: 100%;
  text-align: start;
    grid-template-columns: 32px auto 32px;
    grid-gap: 6px;
`

const IconContainer = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    width: 32px;
    height: 32px;
    `

const TaskInfoContainer = styled.div`
    padding-top: 8px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 100%;
    gap: 0.5em;
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

const TaskTime = styled.p`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 98.9%;
  color: #FF6B00;
`



export default DailyTaskCard;