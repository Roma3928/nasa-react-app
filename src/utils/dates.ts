export const getCurentDate = (): [number, string | number, string | number] => {
  const currentDate: Date = new Date();
  let currentYear: number = currentDate.getFullYear();
  let currentMonth: number | string = currentDate.getMonth() + 1;
  let currentDay: number | string = currentDate.getDate();

  if (currentMonth < 10) {
    currentMonth = `0${currentMonth}`;
  }

  if (currentDay < 10) {
    currentDay = `0${currentDay}`;
  }

  return [currentYear, currentMonth, currentDay];
};
