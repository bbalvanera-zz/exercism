// it('#AllTrianglesMatter', function () {
//   var triangle = new Triangle(20, 10, 10);
//   expect(triangle.isDegenerate()).toBe(true);
// });
"use strict";
class Triangle {
    constructor(a, b, c) {
        this.sides = [a, b, c].sort((a, b) => a - b);
        this.maxSide = Math.max(...this.sides);
        this.sum = this.sides.reduce((sum, value) => sum + value, 0);
        this.isTriangle = this.maxSide * 2 <= this.sum && this.sum > 0;
        this.isDegenerate = this.maxSide * 2 === this.sum && this.sum > 0;
        this.triangleKind = this.determineKind();
    }
    kind() {
        if (!this.isTriangle) {
            throw Error('Invalid triangle');
        }
        return this.triangleKind;
    }
    getEqualSides() {
        let equalSides = 0;
        this.sides.forEach((v, i) => {
            this.sides[i + 1] === v ? equalSides++ : void 0;
        });
        return equalSides === 0 ? 0 : ++equalSides;
    }
    determineKind() {
        const equalSides = this.getEqualSides();
        return kinds.get(equalSides);
    }
}
const kinds = new Map();
kinds.set(0, "scalene");
kinds.set(2, "isosceles");
kinds.set(3, "equilateral");
module.exports = Triangle;
