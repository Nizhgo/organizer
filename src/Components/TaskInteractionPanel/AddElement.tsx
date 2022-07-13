import React, {useContext, useEffect, useState} from "react";
import Card from "../../UiCopmponents/Card";
import styled from "styled-components";
import {AddElementBtn, SmallButton} from "../../UiCopmponents/Buttons";
import {DateContext} from "../Providers/DataContext";
import {ITask, OrganizerContext} from "../Providers/OrganizerContext";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import {Input} from "../../UiCopmponents/Input";

const AddElement = () =>
{
    const {selectedDay} = useContext(DateContext);
    const {AddTask} = useContext(OrganizerContext);
    const [titleText, setTitleText] = useState('');
    const [bodyText, setBodyText] = useState('');
    const onSubmit = async () =>
    {
        if (titleText.length > 0 && bodyText.length > 0) {
        AddTask({id: generateUniqueID(), title: titleText, body: bodyText, timestamp: selectedDay} as ITask);
        setTitleText('');
        setBodyText('');
        }
    }
    return(
        <Card>
            <form onSubmit={onSubmit}>
            <AddElementContainer>
                <AddElementTitle>Добавление нового дела</AddElementTitle>
                <Input required={true} placeholder={'Заголовок'} value={titleText}
                       onChange={e => setTitleText(e.target.value)}/>
                <Input placeholder={'Текст'} value={bodyText}
                          onChange={e => setBodyText(e.target.value)} style={{resize: 'none'}}/>
                <SmallButton onClick={onSubmit}>Добавить</SmallButton>
            </AddElementContainer>
                </form>
        </Card>
    )
}

const AddElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4em;
`

const AddElementTitle = styled.p`
    color: black;
    font-size: 16px;

`

export default AddElement;