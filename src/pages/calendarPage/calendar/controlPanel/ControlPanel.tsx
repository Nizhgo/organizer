import {
	LeftOutlined,
	RightOutlined
} from "@ant-design/icons";
import {
	Button,
	Tooltip
} from "antd";
import React, {
	useContext,
	useMemo
} from "react";
import Now from '../../../../assets/images/now.svg'
import {DateContext} from "../../../../providers/DataContext";
import {GetMonthTitle} from "../../../../scripts/GetMonthTitle";
import {
	ControlPanelWrapper,
	IconContainer,
	MonthTitle,
	NavControls
} from './style'

const ControlPanel = () => {
	const {setCalendarMonth, calendarMonth} = useContext(DateContext);
	const month = useMemo(() => GetMonthTitle(calendarMonth), [calendarMonth]);
	const year = useMemo(() => calendarMonth.getFullYear(), [calendarMonth]);
	const setNowDate = () => {
		setCalendarMonth(new Date());
	}
	const setPrevMonth = () => {
		setCalendarMonth(new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1, 1));
	}
	const setNextMonth = () => {
		setCalendarMonth(new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1, 1));
	}
	return (
		<ControlPanelWrapper>
			<MonthTitle>{year}, {month}</MonthTitle>
			<NavControls>
				<Tooltip title={'Предыдущий месяц'}>
					<Button shape='circle' type={'text'} size={'small'} icon={<LeftOutlined/>} onClick={setPrevMonth}/>
				</Tooltip>
				<Tooltip title={'Сейчас'}>
					<Button shape='circle' type={'text'} size={'small'}
					        icon={<IconContainer><img src={Now} alt={'Now'}/></IconContainer>} onClick={setNowDate}/>
				</Tooltip>
				<Tooltip title={'Следующий месяц'}>
					<Button shape='circle' type={'text'} size={'small'} icon={<RightOutlined/>} onClick={setNextMonth}/>
				</Tooltip>
			</NavControls>
		</ControlPanelWrapper>
	)
}


export default ControlPanel;