const BigInt = require('./big-integer');

class Grains {
  private factor = BigInt(2);

  public square(squareNumber: number): string {
    if (squareNumber < 0 || squareNumber > 64) {
      throw Error("Square out of bounds of chessboard");
    }

    return this.factor.pow(--squareNumber).toString();
  }

  public total(): string {
    return this.factor.pow(64).subtract(1).toString();
  }
}

export = Grains;