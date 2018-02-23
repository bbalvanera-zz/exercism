const MATCH = /(-?\d+)?\s(multiplied\sby|plus|minus|divided\sby|raised\sto\sthe)\s(-?\d+)/ig;
const OPERANDS = new Map();
OPERANDS.set('plus', '+');
OPERANDS.set('minus', '-');
OPERANDS.set('multiplied by', '*');
OPERANDS.set('divided by', '/');

class Operation {
    constructor(
        public left: number,
        public readonly operand: string,
        public right: number) {

    }
    
    public exec(): number {
        try {
            if (this.operand.toLowerCase() === 'raised to the') {
                return Math.pow(this.left, this.right);
            }

            const expression = `${this.left} ${OPERANDS.get(this.operand.toLowerCase())} ${this.right}`;
            return eval(expression);
        }
        catch (_) {
            throw new ArgumentError();
        }
    }
}

class WordProblem {
    constructor(private question: string) {
        
    }

    public answer(): number {
        // check for matches
        let matches: Operation[] = [];
        let found: any[];

        while(found = MATCH.exec(this.question)) {
            matches.push(new Operation(found[1], found[2], found[3]));
        }

        if (matches.length === 0) {
            throw new ArgumentError();
        }

        const result = matches.reduce((prev, curr) => {
            curr.left = curr.left || prev;
            prev = curr.exec();

            return prev;
        }, 0);

        return result;
    }
}

class ArgumentError {

}

export = {
    WordProblem,
    ArgumentError
}