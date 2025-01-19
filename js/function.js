const MINUTES_IN_HOUR = 60;

// Проверяет длину строки

function checkLength(string, maxSymbol) {
  return (string.length <= maxSymbol);
}

checkLength('Javascript', 10);


// Проверяет, является ли строка палиндромом

const checkPalindrome = (string) => {

  string = string.replaceAll(' ', '').toLowerCase();

  let result = '';

  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }

  return string === result;
};

checkPalindrome('abca');


// Извлекает числа из строки

const getNumber = function (string) {

  const foundNamber = string.replaceAll(/\D/g, '');

  return parseInt(foundNamber, 10);
};

getNumber ('агент 007');


// Преобразует число в целое положительное

const transformNumber = function (number) {

  const string = String(number);

  const foundNamber = string.replaceAll(/\D/g, '');

  return parseInt(foundNamber, 10);

};


transformNumber(0.12);
transformNumber(0.120);


// Проверяет, что встреча не выходит за рамки рабочего дня

const getDateTime = (time) => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * MINUTES_IN_HOUR + minutes;
};

// console.log(getDateTime('15:20'));

const checkMeetingTime = (dayStart, dayEnd, meetingStart, meetingDuration) => {
  if (meetingDuration <= 0) {
    return false;
  }

  const workTimeBegin = getDateTime(dayStart);
  const workTimeEnd = getDateTime(dayEnd);

  if (workTimeBegin > workTimeEnd) {
    return false;
  }

  const meetTimeBegin = getDateTime(meetingStart);
  const meetTimeEnd = meetTimeBegin + meetingDuration;

  // console.log(workTimeBegin);
  // console.log(workTimeEnd);
  // console.log(meetTimeBegin);
  // console.log(meetTimeEnd);
  // console.log((meetTimeBegin >= workTimeBegin) && (meetTimeEnd <= workTimeEnd));

  return ((meetTimeBegin >= workTimeBegin) && (meetTimeEnd <= workTimeEnd));
};


checkMeetingTime('08:00', '17:30', '14:00', 90); // true

checkMeetingTime('8:0', '10:0', '8:0', 120); // true

checkMeetingTime('08:00', '14:30', '14:00', 90); // false

checkMeetingTime('14:00', '17:30', '08:0', 90); // false

checkMeetingTime('8:00', '17:30', '08:00', 900); // false

