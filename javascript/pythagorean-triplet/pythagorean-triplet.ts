interface TripletArguments {
    minFactor?: number;
    maxFactor?: number;
    sum?: number;
}

class Triplet {
    constructor(private a: number , private b: number, private c: number) {
        if (a > b || b > c) {
            throw new Error('Invalid triplet values.');
        }
    }

    public sum(): number {
        return this.a + this.b + this.c;
    }

    public product(): number {
        return this.a * this.b * this.c;
    }

    public isPythagorean(): boolean {
        return ((this.a ** 2) + (this.b ** 2)) === (this.c ** 2);
    }

    public static where(args: TripletArguments): Triplet[] {
        let returnValue: Triplet[] = [];
        let { minFactor: min, maxFactor: max, sum } = args;
        
        min = min || 1;
        max = max || 0;

        for (let a = min; a < max - 1; a++) {
            for (let b = a + 1; b < max; b++) {
                for (let c = b + 1; c <= max; c++) {
                    const triplet = new Triplet(a, b, c);
                    if (Triplet.isValid(triplet, sum)) {
                        returnValue.push(triplet);
                    }
                }
            }
        }

        return returnValue;
    }

    private static isValid(triplet: Triplet, sum?: number) {
        return triplet.isPythagorean() && (!sum || sum === triplet.sum());
    }
}

export = Triplet;
