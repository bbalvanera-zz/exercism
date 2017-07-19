class Trinary {
    private triArray: string[];

    constructor(num: string = '0') {
        this.triArray = num.split('').reverse();

        if (!this.triArray.every((i) => /0|1|2/.test(i))) {
            this.triArray = ['0']; // reset
        }
    }

    public toDecimal(): number {
        return this.triArray.reduce((sum, num, i) => {
            return parseInt(num) * this.pow(i) + sum;
        }, 0);
    }

    private pow(power: number) {
        let retVal = 1;
        while(power > 0) {
            retVal *= 3;
            power--;
        }

        return retVal;
    }
}

export = Trinary;