// возвращает месяц в рдительном падяже в зависимости от номера месяца

function MonthInTheGenitiveCase(date: Date)
{
    let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    return months[date.getMonth()];
}

export default MonthInTheGenitiveCase;