function reverseString(input = '') {
  if (input.length === 0) { 
    return input;
  }

  const inputArr = input.split('');
  const reversed = new Array(inputArr.length);

  for(let i = inputArr.length - 1, j = 0; i >= 0; i--, j++) {
    reversed[j] = inputArr[i];
  }

  return reversed.join('');
}

module.exports = reverseString;