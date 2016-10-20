"use strict";
const BigInt = require('./big-integer');
class Grains {
    constructor() {
        this.factor = BigInt(2);
    }
    square(squareNumber) {
        if (squareNumber < 0 || squareNumber > 64) {
            throw Error("Square out of bounds of chessboard");
        }
        return this.factor.pow(--squareNumber).toString();
    }
    total() {
        return this.factor.pow(64).subtract(1).toString();
    }
}
module.exports = Grains;
