"use strict";
class Triplet {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a > b || b > c) {
            throw new Error('Invalid triplet values.');
        }
    }
    sum() {
        return this.a + this.b + this.c;
    }
    product() {
        return this.a * this.b * this.c;
    }
    isPythagorean() {
        return ((Math.pow(this.a, 2)) + (Math.pow(this.b, 2))) === (Math.pow(this.c, 2));
    }
    static where(args) {
        let returnValue = [];
        let { minFactor: min, maxFactor: max, sum } = args;
        min = min || 1;
        max = max || 0;
        for (let a = min; a < max - 1; a++) {
            for (let b = a + 1; b < max; b++) {
                for (let c = b + 1; c <= max; c++) {
                    const triplet = new Triplet(a, b, c);
                    if (Triplet.isValid(triplet, sum)) {
                        returnValue.push(triplet);
                    }
                }
            }
        }
        return returnValue;
    }
    static isValid(triplet, sum) {
        return triplet.isPythagorean() && (!sum || sum === triplet.sum());
    }
}
module.exports = Triplet;
