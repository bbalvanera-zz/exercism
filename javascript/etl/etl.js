"use strict";
class ETL {
    transform(old) {
        let retVal = {};
        let scores = Object.keys(old);
        scores.forEach(score => {
            let letters = old[score];
            letters.forEach(letter => retVal[letter.toLowerCase()] = parseInt(score));
        });
        return retVal;
    }
}
module.exports = ETL;
