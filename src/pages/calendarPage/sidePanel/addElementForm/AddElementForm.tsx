import React, {useContext, useState} from "react";
import {Card} from "../../../../ui/Card";
import {DateContext} from "../../../../components/providers/DataContext";
import {ITask, OrganizerContext} from "../../../../components/providers/OrganizerContext";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import {Button, Input} from "antd";
import {AddElementTitle} from "./style";
import {FormContainer} from '../sharedUI/style'

const AddElementForm = () => {
    const {selectedDay} = useContext(DateContext);
    const {AddTask} = useContext(OrganizerContext);
    const [titleText, setTitleText] = useState('');
    const [bodyText, setBodyText] = useState('');
    const onSubmit = async () => {
        if (titleText.length > 0 && bodyText.length > 0) {
            AddTask({id: generateUniqueID(), title: titleText, body: bodyText, timestamp: selectedDay} as ITask);
            setTitleText('');
            setBodyText('');
        }
    }
    return (
        <Card>
            <form onSubmit={onSubmit}>
                <FormContainer>
                    <AddElementTitle>Добавление нового дела</AddElementTitle>
                    <Input required={true} placeholder={'Заголовок'} value={titleText}
                           onChange={e => setTitleText(e.target.value)}/>
                    <Input placeholder={'Текст'} value={bodyText}
                           onChange={e => setBodyText(e.target.value)} style={{resize: 'none'}}/>
                    <Button onClick={onSubmit} type={'primary'}>Добавить</Button>
                </FormContainer>
            </form>
        </Card>
    )
}


export default AddElementForm;