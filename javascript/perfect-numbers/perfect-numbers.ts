class PerfectNumbers {
    public classify(num: number): string {
        if (num <= 0)
            return 'Classification is only possible for natural numbers.'

        const aliquot = this.aliquot(num);

        if (aliquot > num)
            return 'abundant';
        else if(aliquot < num)
            return 'deficient';
        else
            return 'perfect';
    }

    private aliquot(n: number): number {
        let sum = 0;
        for(var i = n; i > 0; i--) {
            if (n % i === 0) {
                sum += i;
            }    
        }

        return sum - n;
    }
}

export = PerfectNumbers;