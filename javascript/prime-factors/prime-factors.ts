function factorize(num: number): number[] {
    let retVal: number[] = [];
    let reminder = num;
    let prime = 2;

    while (reminder >= prime) {
        if (reminder % prime === 0) {
            retVal.push(prime);
            reminder = reminder / prime;
        }
        else {
            prime = getNextPrime(prime);
        }
    }

    return retVal;
}

function getNextPrime(previous: number): number {
    let current = previous;
    while (current < Number.MAX_SAFE_INTEGER) {
        current++;
        if (isPrime(current))
            return current;
    }
    
    return 0;
}

function isPrime(num: number) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0)
            return false;
        
        i += 6;
    }

    return true;
}

export = {
    for: factorize
};