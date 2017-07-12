"use strict";
class Binary {
    constructor(num = '0') {
        this.binArray = num.split('').reverse();
        if (!this.binArray.every((i) => /0|1/.test(i))) {
            this.binArray = ['0']; // reset
        }
    }
    toDecimal() {
        return this.binArray.reduce((sum, num, i) => {
            return parseInt(num) * this.pow(i) + sum;
        }, 0);
    }
    pow(power) {
        let retVal = 1;
        while (power > 0) {
            retVal *= 2;
            power--;
        }
        return retVal;
    }
}
module.exports = Binary;
