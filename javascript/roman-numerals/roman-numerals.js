"use strict";
function convert(num) {
    if (num > 4999) {
        return 'NaRN';
    }
    let retVal = '';
    const numParts = num.toString().split('').reverse();
    for (let i = 0; i < numParts.length; i++) {
        retVal = translate(parseInt(numParts[i]), keys[i]) + retVal;
    }
    return retVal;
}
const keys = {
    '0': {
        first: 'I',
        middle: 'V',
        last: 'X'
    },
    '1': {
        first: 'X',
        middle: 'L',
        last: 'C'
    },
    '2': {
        first: 'C',
        middle: 'D',
        last: 'M'
    },
    '3': {
        first: 'M',
        middle: 'MMM',
        last: 'M'
    }
};
function translate(num, key) {
    const { first, middle, last } = key;
    let retVal = '';
    if (num === 4) {
        retVal = first + middle;
    }
    else if (num === 5) {
        retVal = middle;
    }
    else if (num === 9) {
        retVal = first + last;
    }
    else {
        if (num < 4) {
            retVal = first.repeat(num);
        }
        else {
            retVal = middle + first.repeat(num - 5);
        }
    }
    return retVal;
}
module.exports = convert;
