import React, {useContext} from "react";
import {
	SubmitHandler,
	useForm
} from "react-hook-form";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import {
	object,
	string
} from 'yup';
import {DateContext} from "../providers/DataContext";
import {
	ITask,
	OrganizerContext
} from "../providers/OrganizerContext";
import useYupValidationResolver from "../../hooks/useYupValidationResolver";
import {Card} from "../../ui/Card";
import {
	ButtonsContainer,
	ErrorMessage,
	FormContainer,
	TaskDescription,
	TaskDescriptionWrapper,
	TaskTitle,
	TaskTitleWrapper,
} from "./style";

import Button from "../../ui/Button/Button";


const schema = object().shape({
	title: string().required('Введите название задачи').max(128, 'Слишком длинное название!'),
	body: string(),
});

interface IAddElementFormProps {
	setIsEdit: (isEdit: boolean) => void;
	task?: ITask,
}

type FormData = {
	title: string;
	body: string;
}


const TaskForm = (props: IAddElementFormProps) => {
	const {setIsEdit} = props;
	const resolver = useYupValidationResolver(schema);
	const {selectedDay} = useContext(DateContext);
	const {AddTask, UpdateTask} = useContext(OrganizerContext);
	const StopEdit = () => setIsEdit(false);
	const {register, handleSubmit, formState: {errors}} = useForm<FormData>({resolver});
	const isEdit = !!props.task;
	const propsTask = props.task || {title: '', body: ''} as ITask;
	const onSubmit: SubmitHandler<FormData> = data => {
		const task: ITask = {
			id: isEdit ? propsTask.id : generateUniqueID(),
			title: data.title,
			body: data.body,
			timestamp: selectedDay,
			isDone: props.task?.isDone || false,
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
						<TaskTitle {...register('title')} name='title' placeholder='Название задачи'
						           defaultValue={propsTask.title}/>
						<ErrorMessage>{errors.title?.message}</ErrorMessage>
					</TaskTitleWrapper>
					<TaskDescriptionWrapper>
						<TaskDescription rows={4} {...register('body')} name='body' placeholder='Описание'
						                 defaultValue={propsTask.body}/>
						<ErrorMessage>{}</ErrorMessage>
					</TaskDescriptionWrapper>
					<ButtonsContainer>
						<Button variant={'submit'} type={'submit'} onClick={StopEdit}>Отмена</Button>
						<Button variant={'cancel'}>{isEdit ? 'Сохранить' : 'Добавить'}</Button>
					</ButtonsContainer>
				</FormContainer>
			</form>
		</Card>

	)
}


export default TaskForm;