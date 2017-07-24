"use strict";
class Sieve {
    constructor(seed = 2) {
        this.primes = [];
        if (seed < 2)
            return;
        let sieve = new Array(...(new Array(seed + 1).keys())).slice(2);
        while (sieve.length > 0) {
            const prime = sieve[0];
            this.primes.push(prime);
            sieve = sieve.filter((v, i) => v % prime !== 0);
        }
    }
}
module.exports = Sieve;
