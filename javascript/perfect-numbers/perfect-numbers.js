"use strict";
class PerfectNumbers {
    classify(num) {
        if (num <= 0)
            return 'Classification is only possible for natural numbers.';
        const aliquot = this.aliquot(num);
        if (aliquot > num)
            return 'abundant';
        else if (aliquot < num)
            return 'deficient';
        else
            return 'perfect';
    }
    aliquot(n) {
        let sum = 0;
        for (var i = n; i > 0; i--) {
            if (n % i === 0) {
                sum += i;
            }
        }
        return sum - n;
    }
}
module.exports = PerfectNumbers;
