import React from "react";
import {DatePicker, Input, TimePicker, Space, Button} from "antd";

const AddTask = () => {
    return (
        <form>
        <Space direction={'vertical'} size={10}>
            <Space direction={'vertical'} size={1}>
            <p>Дата:</p>
            <DatePicker/>
            </Space>
            <Space direction={'vertical'} size={1}>
            <p>Название задачи</p>
            <Input title={'Название задачи'}/>
            </Space>
            <Space direction={'vertical'} size={1}>
            <p>Описание задачи</p>
            <Input title={'Описание задачи'}/>
            </Space>
            <Space>
                <Space direction={'vertical'} size={1}>
                <p>Начало задачи</p>
                    <TimePicker/>
                </Space>
                <Space direction={'vertical'} size={1}>
                <p>Конец задачи</p>
                <TimePicker/>
                </Space>
            </Space>

            <Button type={'primary'}>Добавить</Button>
        </Space>
        </form>
    )
}

export default AddTask;