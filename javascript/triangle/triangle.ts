// it('#AllTrianglesMatter', function () {
//   var triangle = new Triangle(20, 10, 10);
//   expect(triangle.isDegenerate()).toBe(true);
// });

class Triangle {
  private sides: number[];
  private triangleKind: string;
  private isTriangle: boolean;
  private isDegenerate: boolean;
  private sum: number;
  private maxSide: number;

  constructor(a: number, b: number, c: number) {
    this.sides   = [a, b, c].sort((a: number, b: number) => a - b);
    this.maxSide = Math.max(...this.sides);
    this.sum     = this.sides.reduce((sum: number, value: number) => sum + value, 0);

    this.isTriangle   = this.maxSide * 2 <=  this.sum && this.sum > 0;
    this.isDegenerate = this.maxSide * 2 === this.sum && this.sum > 0;
    this.triangleKind = this.determineKind();
  }

  public kind() {
    if (!this.isTriangle) {
      throw Error('Invalid triangle');
    }

    return this.triangleKind;
  }

  private getEqualSides(): number {
    let equalSides = 0;
    this.sides.forEach((v: number, i: number) => {
      this.sides[i + 1] === v ? equalSides++ : void 0;
    });

    return equalSides === 0 ? 0 : ++equalSides;
  }

  private determineKind(): string {
    const equalSides = this.getEqualSides();
    return kinds.get(equalSides);
  }
}

const kinds = new Map<number, string>();
kinds.set(0, "scalene");
kinds.set(2, "isosceles");
kinds.set(3, "equilateral");

export = Triangle;