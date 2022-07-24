import React, {
	memo,
	useContext,
	useMemo
} from "react";
import {DateContext} from "../../../../providers/DataContext";
import {
	ITask,
	OrganizerContext
} from "../../../../providers/OrganizerContext";
import {IDayElement} from "./interfaces";
import {
	Date,
	DayBadge,
	DayBadgeContainer,
	DayElementContainer,
	DayElementWrapper,
	TasksContainer,
	TaskTitle
} from "./style";


const CalendarItem = memo((props: IDayElement) => {

	const {date} = props;
	const {selectedDay, setSelectedDay, calendarMonth} = useContext(DateContext);
	const isSelectedMonth = useMemo(() => date.getMonth() === calendarMonth.getMonth(), [date, calendarMonth]);
	const {GetTaskByDayMothAndYear} = useContext(OrganizerContext);
	const tasks = GetTaskByDayMothAndYear(props.date);
	const taskCount = useMemo(() => tasks.length, [tasks]);
	const notCompletedTasksCount = useMemo(() => tasks.filter((task: ITask) => !task.isDone).length, [tasks]);
	const isSelected = useMemo(() => date.getDate() === selectedDay.getDate() && date.getMonth() === selectedDay.getMonth() && date.getFullYear() === selectedDay.getFullYear(), [date, selectedDay]);

	return (
		<DayElementWrapper key={date.getTime()} onClick={() => setSelectedDay(date)} isSelected={isSelected}
		                   isSelectedMonth={isSelectedMonth}>
			<DayBadgeContainer>
				{notCompletedTasksCount > 0 && <DayBadge count={notCompletedTasksCount} size={'small'}/>}
			</DayBadgeContainer>
			<DayElementContainer isSelected={isSelected}>
				<Date isSelected={isSelected}>{date.toLocaleString('ru', {
					day: '2-digit'
				})}</Date>
			</DayElementContainer>
			<TasksContainer>
				{taskCount > 0 ? <TaskTitle isDone={tasks[0].isDone}>{tasks[0].title}</TaskTitle> : ''}
				{taskCount > 1 ? <TaskTitle isDone={tasks[1].isDone}>{tasks[1].title}</TaskTitle> : ''}
				{taskCount > 2 ? <TaskTitle style={{fontSize: '8px', textDecoration: 'underline'}}>И
					еще {taskCount - 2}...</TaskTitle> : ''}
			</TasksContainer>
		</DayElementWrapper>
	)
});


export {CalendarItem};