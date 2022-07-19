import {MoreOutlined,} from '@ant-design/icons'
import {
	message,
	Popconfirm,
	Popover
} from 'antd';
import React, {
	useContext,
	useState
} from "react";
import {
	ITask,
	OrganizerContext
} from "../../../../components/providers/OrganizerContext";
import {Card} from "../../../../ui/Card";
import Checkbox from "../../../../ui/Checkbox";
import TaskForm from "../../../../components/taskForm/TaskForm";
import {
	DailyTaskGridContainer,
	DailyTaskWrapper,
	IconContainer,
	PopoverItem,
	TaskBody,
	TaskInfoContainer,
	TaskTitle,
} from './style'


const DailyTaskCard = (props: ITask) => {
	const {DeleteTask, CompleteTask} = useContext(OrganizerContext);
	const {title, body, isDone} = props;
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const Delete = async () => {
		DeleteTask(props);
		message.success('Задача удалена!');
	};


	const Edit = () => {
		setIsEdit(true);
	}

	const Complete = () => {
		CompleteTask(props);
		if (!isDone) {
			message.success('Задача выполнена!');
		}
	}

	const PopoverMenu = () => {
		return (
			<div>
				<Popconfirm title='Вы уверены?' okText={'Да, удалить'} cancelText={'Нет'} onConfirm={Delete}>
					<PopoverItem style={{color: 'indianred'}}>Удалить</PopoverItem>
				</Popconfirm>
				<PopoverItem onClick={Edit}>Редактировать</PopoverItem>
			</div>
		)
	}

	return (
		<>
			{isEdit ?
				<TaskForm setIsEdit={setIsEdit} task={props}/>
				:
				<Card>
					<DailyTaskWrapper>
						<DailyTaskGridContainer>
							<IconContainer>
								<Checkbox onChange={Complete} checked={isDone}/>
							</IconContainer>
							<TaskInfoContainer isComplete={isDone || false}>
								<TaskTitle>{title}</TaskTitle>
								<TaskBody>{body}</TaskBody>
							</TaskInfoContainer>
							<IconContainer>
								<Popover content={PopoverMenu}>
									<MoreOutlined height={'32px'} width={'32px'}/>
								</Popover>
							</IconContainer>
						</DailyTaskGridContainer>
					</DailyTaskWrapper>
				</Card>
			}
		</>
	)
}


export default DailyTaskCard;