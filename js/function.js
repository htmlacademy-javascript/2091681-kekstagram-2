function checkLength(string = '', maxSymbol = 1) {
  return (string.length <= maxSymbol);
}

console.log(checkLength('Javascript', 5));

const isPolindrome = (string = '') => {

  string = string.replaceAll(' ', '');
  string = string.toLocaleLowerCase();

  let result = '';

  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }

  return string === result;
};

console.log(isPolindrome('aasaa'));
