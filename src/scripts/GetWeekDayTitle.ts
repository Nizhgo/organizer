function getWeekDay(date: Date): string {
	let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

	return days[date.getDay()];
}

function getShortWeekDay(date: Date): string {
	let days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
	return days[date.getDay()];
}

export {
	getWeekDay,
	getShortWeekDay
};