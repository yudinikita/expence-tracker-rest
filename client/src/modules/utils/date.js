export function getMonthDay (date) {
  const monthNames = ['января', 'Февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ]
  return monthNames[date.getMonth()]
}

export function getWeekDay (date) {
  const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']
  return days[date.getDay()]
}

export const calendarLabel = ({ date }) => {
  const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ]
  return monthNames[date.getMonth()] + ', ' + date.getFullYear()
}

export const firstDateByMonth = (date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0)
}

export const endDateByMonth = (date) => {
  const lastDayByMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  return new Date(date.getFullYear(), date.getMonth(), lastDayByMonth, 0, 0, 0, 0)
}
