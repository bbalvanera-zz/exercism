"use strict";
class Trinary {
    constructor(num = '0') {
        this.triArray = num.split('').reverse();
        if (!this.triArray.every((i) => /0|1|2/.test(i))) {
            this.triArray = ['0']; // reset
        }
    }
    toDecimal() {
        return this.triArray.reduce((sum, num, i) => {
            return parseInt(num) * this.pow(i) + sum;
        }, 0);
    }
    pow(power) {
        let retVal = 1;
        while (power > 0) {
            retVal *= 3;
            power--;
        }
        return retVal;
    }
}
module.exports = Trinary;
