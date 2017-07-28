"use strict";
class Proverb {
    constructor(...consequences) {
        if (!consequences || consequences.length < 2) {
            throw new Error('Invalid consequence sequence');
        }
        const lastElement = consequences[consequences.length - 1];
        let qualifier = '';
        if (typeof (lastElement) === 'object') {
            qualifier = lastElement.qualifier + ' ';
            consequences.pop();
        }
        const chain = [];
        for (let i = 0; i < consequences.length - 1; i++) {
            chain.push(`For want of a ${consequences[i]} the ${consequences[i + 1]} was lost.`);
        }
        chain.push(`And all for the want of a ${qualifier}${consequences[0]}.`);
        this.proverb = chain.join('\n');
    }
    toString() {
        return this.proverb;
    }
}
module.exports = Proverb;
