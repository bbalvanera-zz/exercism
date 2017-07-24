class Octal {
    private arr: string[];

    constructor(num: string = '0') {
        this.arr = !/[^0-7]/.test(num) ? num.split('').reverse() : ['0'];
    }

    public toDecimal(): number {
        let power = 1;
        return this.arr.reduce((sum, num, i) => {
            const result = parseInt(num) * power + sum;
            power *= 8;

            return result;
        }, 0);
    }
}

export = Octal;