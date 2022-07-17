import React, {useContext, useMemo} from "react";
import { ControlPanelWrapper, MonthTitle, NavControls} from './style'
import {Button, Tooltip, DatePicker} from "antd";
import {LeftOutlined, RightOutlined, CalendarOutlined} from "@ant-design/icons";
import {DateContext} from "../../../../components/providers/DataContext";
import {GetMonthTitle} from "../../../../scripts/GetMonthTitle";
import Now from '../../../../assets/images/now.svg'
import styled from "styled-components";

const ControlPanel = () => {
    const {selectedDay, setDateShift} = useContext(DateContext);
    const month = useMemo(() => GetMonthTitle(selectedDay), [selectedDay]);
    const year = useMemo(() => selectedDay.getFullYear(), [selectedDay]);
    const setNowDate = () => {
        setDateShift(new Date());
    }
    const setPrevMonth = () => {
        setDateShift(new Date(selectedDay.getFullYear(), selectedDay.getMonth() - 1, 1));
    }
    const setNextMonth = () => {
        setDateShift(new Date(selectedDay.getFullYear(), selectedDay.getMonth() + 1, 1));
    }
    return (
        <ControlPanelWrapper>
           <MonthTitle>{year}, {month}</MonthTitle>
            <NavControls>
                <Tooltip title={'Предыдущий месяц'}>
                    <Button shape="circle" type={'text'} size={'small'} icon={<LeftOutlined/>} onClick={setPrevMonth}/>
                </Tooltip>
                <Tooltip title={'Сейчас'}>
                    <Button shape="circle" type={'text'} size={'small'} icon={<IconContainer><img src={Now}/></IconContainer>} onClick={setNowDate}/>
                </Tooltip>
                <Tooltip title={'Следующий месяц'}>
                    <Button shape="circle" type={'text'} size={'small'} icon={<RightOutlined />} onClick={setNextMonth}/>
                </Tooltip>
                <DatePicker bordered={false} suffixIcon={<CalendarOutlined/>} placeholder={''}/>
            </NavControls>
        </ControlPanelWrapper>
    )
}

const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    `

export default ControlPanel;