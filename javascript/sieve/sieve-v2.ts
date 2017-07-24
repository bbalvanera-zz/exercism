class Sieve {
    public primes: number[] = [];

    constructor(seed: number = 2) {
        if (seed < 2)
            return;

        let sieve: any[] = new Array(...(new Array(seed + 1).keys())).slice(2);
        
        while (sieve.length > 0) {
            const prime = sieve[0];
            this.primes.push(prime);

            sieve = sieve.filter((v, i) => v % prime !== 0);
        }
    }
}

export = Sieve;
