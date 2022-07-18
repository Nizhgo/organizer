const GetArrayOfDaysForMonths = (nowDate: Date) => {
    const firstDayOfMonth = new Date(nowDate.getFullYear(), nowDate.getMonth(), 1);
    const lastDayOfMonth = new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, 0);
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const lastDayOfWeek = lastDayOfMonth.getDay();
    const daysInMonth = lastDayOfMonth.getDate();
    const countOfDaysInPreviousMonth = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
    const countOfDaysInNextMonth = lastDayOfWeek === 0 ? 6 : 6 - lastDayOfWeek;
    const ArrayOfDaysForMonths = [];
    for (let i = 0; i < daysInMonth; i++) {
        const day = new Date(nowDate.getFullYear(), nowDate.getMonth(), i + 1);
        ArrayOfDaysForMonths.push(day);
    }
    const ArrayOfDaysInPreviousMonth = [];
    for (let i = 0; i < countOfDaysInPreviousMonth; i++) {
        const day = new Date(nowDate.getFullYear(), nowDate.getMonth(), i - countOfDaysInPreviousMonth + 1);
        ArrayOfDaysInPreviousMonth.push(day);
    }
    const ArrayOfDaysInNextMonth = [];
    for (let i = 0; i <= countOfDaysInNextMonth; i++) {
        const day = new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, i + 1);
        ArrayOfDaysInNextMonth.push(day);
    }
    return [...ArrayOfDaysInPreviousMonth, ...ArrayOfDaysForMonths, ...ArrayOfDaysInNextMonth];
}

export default GetArrayOfDaysForMonths;