const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

function translate(phrase: string): string {
    let words = phrase.split(' ');
    let result: string[] = [];

    for (const word of words) {
        let letter = 0;
        let consonants = '';

        while (!vowels.has(word[letter])) {
            if (word[letter] === 'q' && word[letter + 1] === 'u') {
                // take 'q' followed by 'u' as a compound word
                consonants += 'qu';
                letter += 2;
                continue;
            }

            consonants += word[letter];
            letter++;
        }

        result.push(`${word.substr(letter)}${consonants}ay`);
    }

    return result.join(' ');
}

export = {
    translate
};