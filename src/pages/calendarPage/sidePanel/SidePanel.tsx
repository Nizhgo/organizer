import {Button} from "antd";
import React, {
	useContext,
	useEffect,
	useMemo,
	useState
} from "react";
import CloseIcon from "../../../assets/images/close_FILL0_wght400_GRAD0_opsz48.svg"
import {DateContext} from "../../../components/providers/DataContext";
import {
	ITask,
	OrganizerContext
} from "../../../components/providers/OrganizerContext";
import {GetMonthTitleInCase} from "../../../scripts/GetMonthTitle";
import {getWeekDay} from "../../../scripts/GetWeekDayTitle";
import DailyTaskCard from "./dailyTaskCard/DailyTaskCard";
import {
	CloseIconContainer,
	DayTitle,
	RightPanelContainer,
	TasksContainer,
	ToDoListTitle
} from "./style";
import TaskForm from "../../../components/taskForm/TaskForm";


const SidePanel = () => {
	const {GetTaskByDayMothAndYear} = useContext(OrganizerContext);
	const {selectedDay} = useContext(DateContext);
	const [isAddingNewElement, setIsAddingNewElement] = useState<boolean>(false);
	const [toDoList, setToDoList] = useState<ITask[]>(GetTaskByDayMothAndYear(selectedDay));
	const [isShow, setIsShow] = useState<boolean>(false);

	const day = useMemo(() => selectedDay.toLocaleString('ru', {
		day: 'numeric'
	}), [selectedDay]);

	const month = useMemo(() => GetMonthTitleInCase(selectedDay), [selectedDay]);

	const dayAndMonth = useMemo(() => `${day} ${month},`, [day, month]);
	const weekDay = useMemo(() => getWeekDay(selectedDay), [selectedDay]);


	useEffect(() => {
		setIsShow(true);
	}, [selectedDay]);

	useEffect(() => {
		setToDoList(GetTaskByDayMothAndYear(selectedDay));
	}, [GetTaskByDayMothAndYear, selectedDay]);


	useEffect(() => {
		setIsShow(false)
	}, []);


	return useMemo(() => (
		<RightPanelContainer isShown={isShow}>
			<CloseIconContainer onClick={() => setIsShow(false)}>
				<img src={CloseIcon} alt={'закрыть'}/>
			</CloseIconContainer>
			<DayTitle>
				{dayAndMonth}<br/>{weekDay}
			</DayTitle>
			{isAddingNewElement ? <TaskForm setIsEdit={setIsAddingNewElement}/> :
				<Button onClick={() => setIsAddingNewElement(true)}>Добавить задачу</Button>}
			<ToDoListTitle>
				Список дел:
			</ToDoListTitle>
			{
				toDoList.length > 0 ?
					<TasksContainer>
						{toDoList.map((obj) => {
							return <DailyTaskCard
								id={obj.id}
								title={obj.title}
								body={obj.body}
								timestamp={obj.timestamp}
								key={obj.id}
								isDone={obj.isDone || false}
							/>

						})}
					</TasksContainer>
					:
					<>
						<p
							style={{marginTop: '2em'}}>
							на этот день нет никаких дел!😊
						</p>
					</>
			}
		</RightPanelContainer>

	), [isAddingNewElement, isShow, toDoList, dayAndMonth, weekDay]);
}


export default SidePanel;