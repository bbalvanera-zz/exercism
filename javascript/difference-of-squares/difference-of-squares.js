"use strict";
class Squares {
    constructor(num) {
        this.num = num;
        this.squareOfSums = this.getSquareOfSums();
        this.sumOfSquares = this.getSumOfSquares();
        this.difference = this.squareOfSums - this.sumOfSquares;
    }
    getSquareOfSums() {
        return Math.pow(((this.num * (this.num + 1)) / 2), 2);
    }
    getSumOfSquares() {
        return (this.num * (this.num + 1) * ((this.num * 2) + 1)) / 6;
    }
}
module.exports = Squares;
