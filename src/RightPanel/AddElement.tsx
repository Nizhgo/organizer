import React, {useContext, useEffect, useState} from "react";
import Card from "../SharedCopmponents/Card";
import {Input, TextArea} from '../SharedCopmponents/Input'
import styled from "styled-components";
import {AddElementBtn} from "../SharedCopmponents/Buttons";
import {DateContext} from "../App";

const AddElement = () =>
{
    const {selectedDay} = useContext(DateContext);
    const [titleText, setTitleText] = useState('');
    const [bodyText, setBodyText] = useState('');
    const onSubmit = async () =>
    {
        let jsonDataObj = JSON.stringify({date: selectedDay, title: titleText, body: bodyText});
        console.log(jsonDataObj);
        const Response = await fetch('http://localhost/organizer/AddItemInDayToDoList.php', {
            method: 'post',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: jsonDataObj
        });
        console.log(Response);
    }
    return(
        <Card>
            <form onSubmit={onSubmit}>
            <AddElementContainer>
                <AddElementTitle>Добавление нового дела</AddElementTitle>
                <Input required={true} placeholder={'Заголовок'} value={titleText}
                       onChange={e => setTitleText(e.target.value)}/>
                <TextArea placeholder={'Текст'} value={bodyText}
                          onChange={e => setBodyText(e.target.value)}/>
                <AddElementBtn type={'button'} onClick={onSubmit}>Добавить</AddElementBtn>
            </AddElementContainer>
                </form>
        </Card>
    )
}

const AddElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.32em;
`

const AddElementTitle = styled.p`
    color: black;
  font-size: 16px;

`

export default AddElement;