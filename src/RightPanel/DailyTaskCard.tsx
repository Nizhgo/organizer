import React, {useCallback, useContext, useEffect, useState} from "react";
import Card from "../SharedCopmponents/Card";
import styled from "styled-components";
import EditIcon from '../Images/edit_FILL0_wght400_GRAD0_opsz40.svg'
import DeleteIcon from '../Images/delete_forever_FILL0_wght400_GRAD0_opsz40.svg'
import {Input, TextArea} from "../SharedCopmponents/Input";
import {ITask, OrganizerContext} from "../Auth/OrganizerContext";
const DailyTaskCard = (props: ITask) =>
{
    const {DeleteTask, UpdateTask} = useContext(OrganizerContext);
    const {title, body} = props;
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [titleText, setTitleText] = useState<string>(title);
    const [bodyText, setBodyText] = useState<string>(body);
    const del = async () =>
    {
        DeleteTask(props);
    };

useEffect(() =>
{
    if (!isEdit)
    {
        SaveEditedTask();
    }
}, [isEdit]);

    const SaveEditedTask = () =>
    {
        setIsEdit(false);
        if (titleText !== title || bodyText !== body) {
            UpdateTask({...props, title: titleText, body: bodyText});
        }
    }


    return(
        <Card>
            <DailyTaskGridContainer>
                <DailyTaskContainer>
                    {
                        isEdit ?
                            <>
                                <Input value={titleText} onChange={e => setTitleText(e.target.value)}/>
                                <TextArea value={bodyText} onChange={e => setBodyText(e.target.value)}/>
                            </>
                            :
                            <>
                                <CardTitle>{titleText}</CardTitle>
                                <CardBody>{bodyText}</CardBody>
                            </>
                    }
                </DailyTaskContainer>
                    <form style={{display:'flex', alignItems:'start',justifyContent:'space-between'}}>
                        <button onClick={() => setIsEdit(prev => !prev)} type={'button'}><DailyTaskMenuIcon src={EditIcon}/></button>
                        <button onClick={del} type={'button'}><DailyTaskMenuIcon src={DeleteIcon}/></button>
                    </form>
            </DailyTaskGridContainer>


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

export  default DailyTaskCard;