"use strict";
class Anagram {
    constructor(phrase) {
        this.original = phrase.toLowerCase();
        this.sorted = this.sort(this.original);
    }
    matches(...words) {
        let candidates = words;
        if (Array.isArray(words[0])) {
            candidates = words[0];
        }
        return candidates.filter((candidate) => {
            candidate = candidate.toLowerCase();
            if (candidate === this.original) {
                return false;
            }
            candidate = this.sort(candidate);
            return this.sorted == candidate;
        });
    }
    sort(word) {
        return [...word].sort().join('');
    }
}
module.exports = Anagram;
