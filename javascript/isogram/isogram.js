"use strict";
class Isogram {
    constructor(phrase) {
        this.split = [];
        this.isogram = true;
        let letters = phrase.toLowerCase().replace(/\s|-/g, '').split('');
        for (let s of letters) {
            if (this.split.indexOf(s) >= 0) {
                this.isogram = false;
            }
            this.split.push(s);
        }
    }
    isIsogram() {
        return this.isogram;
    }
}
module.exports = Isogram;
