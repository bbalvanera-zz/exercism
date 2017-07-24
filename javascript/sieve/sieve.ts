class Sieve {
    public primes: number[] = [];

    constructor(seed: number = 2) {
        if (seed < 2)
            return;

        let sieve = new Array<number>(seed + 1).fill(1);
        for (let i = 2; i**2 < seed; i++) {
            if (sieve[i]) {
                for (let j = i**2; j <= seed; j+= i) {
                    sieve[j] = 0;
                }
            }
        }

        this.primes = sieve.filter(value => value > 1);
    }
}

export = Sieve;
