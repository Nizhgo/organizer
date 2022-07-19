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
import {DateContext} from "../../../../components/providers/DataContext";
import {GetMonthTitle} from "../../../../scripts/GetMonthTitle";
import {
	ControlPanelWrapper,
	IconContainer,
	MonthTitle,
	NavControls
} from './style'

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
					<Button shape='circle' type={'text'} size={'small'} icon={<LeftOutlined/>} onClick={setPrevMonth}/>
				</Tooltip>
				<Tooltip title={'Сейчас'}>
					<Button shape='circle' type={'text'} size={'small'}
					        icon={<IconContainer><img src={Now}/></IconContainer>} onClick={setNowDate}/>
				</Tooltip>
				<Tooltip title={'Следующий месяц'}>
					<Button shape='circle' type={'text'} size={'small'} icon={<RightOutlined/>} onClick={setNextMonth}/>
				</Tooltip>
			</NavControls>
		</ControlPanelWrapper>
	)
}


export default ControlPanel;