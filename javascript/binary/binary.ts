class Binary {
    private binArray: string[];

    constructor(num: string = '0') {
        this.binArray = num.split('').reverse();

        if (!this.binArray.every((i) => /0|1/.test(i))) {
            this.binArray = ['0']; // reset
        }
    }

    public toDecimal(): number {
        return this.binArray.reduce((sum, num, i) => {
            return parseInt(num) * this.pow(i) + sum;
        }, 0);
    }

    private pow(power: number) {
        let retVal = 1;
        while(power > 0) {
            retVal *= 2;
            power--;
        }

        return retVal;
    }
}

export = Binary;