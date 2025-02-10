// Получение случайного числа из диапазона
const getRandomInt = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Получение последующего числа для текущего
const getId = () => {
  let currentId = 0;
  return () => ++currentId;
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';


export {
  getRandomInt,
  getId,
  isEscapeKey,
  isEnterKey,
};
