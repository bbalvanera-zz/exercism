class Squares {
    public sumOfSquares: number;
    public squareOfSums: number;
    public difference: number;

    constructor(public num: number) {
        this.squareOfSums = this.getSquareOfSums();
        this.sumOfSquares = this.getSumOfSquares();
        this.difference = this.squareOfSums - this.sumOfSquares; 
    }

    private getSquareOfSums(): number {
        return ((this.num * (this.num + 1)) / 2) ** 2;
    }

    private getSumOfSquares(): number {
        return (this.num * (this.num + 1) * ((this.num * 2) + 1)) / 6;
    }
}

export = Squares;
