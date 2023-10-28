export const formatLunarOrbits = (count: number) => {
  if (count === 1) {
    return '1 лунная орбита';
  } else if (count >= 2 && count <= 4) {
    return `${count} лунные орбиты`;
  } else {
    return `${count} лунных орбит`;
  }
};
