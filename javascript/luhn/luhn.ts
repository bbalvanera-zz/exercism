class Luhn {
    public valid = false;

    constructor(num: string = '') {
        num = num.replace(/\s/g, '');
        if (num.length < 2) {
            return;
        }

        let digits = num.split('').map(v => parseInt(v)).reverse();
        let result = digits.reduce((sum, value, index) => {
            if ((index + 1) % 2 === 0) {
                value *= 2;
                value = value > 9 ? value - 9 : value;
            }

            return sum + value;
        }, 0);

        this.valid = result % 10 === 0;
    }
}

export = Luhn;
