"use strict";
class Pangram {
    constructor(phrase = '') {
        let alphabet = new Uint8Array(26); // 26 letters in alphabet
        phrase.toLowerCase().replace(/[^a-z]/, '').split('').forEach((v) => {
            let pos = v.charCodeAt(0) - 97; // lowercase 'a' starts at 97 in ascii table.
            alphabet[pos] = 1;
        });
        alphabet = alphabet.filter((v) => v === 1);
        this.pangram = alphabet.length === 26;
    }
    isPangram() {
        return this.pangram;
    }
}
module.exports = Pangram;
