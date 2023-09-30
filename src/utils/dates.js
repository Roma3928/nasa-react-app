export const getCurentDate = () => {
  const currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth() + 1;
  let currentDay = currentDate.getDate();

  if (currentMonth < 10) {
    currentMonth = `0${currentMonth}`;
  }

  if (currentDay < 10) {
    currentDay = `0${currentDay}`;
  }

  return [currentYear, currentMonth, currentDay];
};
