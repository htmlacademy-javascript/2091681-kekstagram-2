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

