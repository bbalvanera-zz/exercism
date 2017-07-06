class ETL {
    public transform(old) {
        let retVal = {};
        let scores = Object.keys(old) as string[];

        scores.forEach(score => {
            let letters = old[score] as string[];
            letters.forEach(letter => retVal[letter.toLowerCase()] = parseInt(score));
        });

        return retVal;
    }
}

export = ETL;