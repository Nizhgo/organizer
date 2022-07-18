import React, {useContext, useState} from "react";
import {Card} from "../../../../ui/Card";
import {DateContext} from "../../../../components/providers/DataContext";
import {ITask, OrganizerContext} from "../../../../components/providers/OrganizerContext";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import {Button, Input, Space} from "antd";
import {FormContainer} from "../sharedUI/style";
import {useForm, Resolver, SubmitHandler} from "react-hook-form";
import styled from "styled-components";
interface IAddElementFormProps {
    setIsEdit: (isEdit: boolean) => void;
    task?: ITask,
}

type FormData = {
    title: string;
    body: string;
}


const AddElementForm = (props: IAddElementFormProps) => {
    const {setIsEdit} = props;
    const {selectedDay} = useContext(DateContext);
    const {AddTask, UpdateTask} = useContext(OrganizerContext);
    const StopEdit = () => setIsEdit(false);
    const {register, handleSubmit} = useForm<FormData>();
    const isEdit = !!props.task;
    const propsTask = props.task || {title: '', body: ''} as ITask;
    const onSubmit: SubmitHandler<FormData> = data => {
        const task: ITask = {
            id: isEdit ? propsTask.id : generateUniqueID(),
            title: data.title,
            body: data.body,
            timestamp: selectedDay,
            isDone: false,
        };
        if (isEdit) {
            UpdateTask(task as ITask);
            StopEdit();
        }
        else {
            AddTask(task as ITask);
            StopEdit();
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormContainer>
                    <TaskTitleWrapper>
                        <input {...register('title')} name="title" placeholder="Название задачи" defaultValue={propsTask.title}/>
                        <ErrorMessage>{}</ErrorMessage>
                    </TaskTitleWrapper>
                    <TaskDescriptionWrapper>
                        <TaskDescription {...register('body')} name="body" placeholder="Описание" defaultValue={propsTask.body}/>
                        <ErrorMessage>{}</ErrorMessage>
                    </TaskDescriptionWrapper>
                    <ButtonsContainer>
                        <CancelButton onClick={StopEdit}>Отмена</CancelButton>
                        <SubmitButton type={'submit'}>{isEdit? 'Сохранить' : 'Добавить'}</SubmitButton>
                    </ButtonsContainer>
                </FormContainer>
            </form>
        </Card>

    )
}


const ErrorMessage = styled.div`
  color: #FF8B8B;
  font-size: 10px;
  height: 1.2em;
  `


const TaskDescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 0.1em;
    `

const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 0.5em;
    justify-content: end;
    align-items: center;
    `

    const SubmitButton = styled.button`
      padding: 8px 14px;
      gap: 10px;
      background: #672EE3;
      border: 1px solid #756391;
      border-radius: 8px;
      color: #fff;
      font-weight: 500;
      font-size: 14px;
      line-height: 98.9%;
      cursor: pointer;
      box-sizing: border-box;

      :hover {
        background: #6024de;
      }
    `

    const TaskDescription = styled.textarea`
        width: 100%;
        height: 100%;
        border: none;
        resize: none;
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 150%;
        color: #000;
        padding: 5px;
        border-radius: 4px;
        box-sizing: border-box;
        `

    const CancelButton = styled(SubmitButton)`
        background: transparent;
        color: #9D9D9D;
      border: 1px solid #9D9D9D;
      
        :hover {
            background: #D2D2D2;
        }
      `
  const TaskTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    border-radius: 4px;
    width: 100%;
    height: 32px;
    font-size: 16px;
    font-weight: 500;
    color: #000000;
    padding: 5px;
  `

export default AddElementForm;