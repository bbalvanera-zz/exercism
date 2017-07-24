"use strict";
const ALPHA = 'abcdefghijklmnopqrstuvwxyz';
class Cipher {
    constructor(key) {
        this.key = key;
        if (this.key === undefined) {
            this.key = this.generateRandomKey();
        }
        if (!this.key || this.key.length === 0 || this.key.match(/[\dA-Z]/)) {
            throw new Error('Bad key');
        }
    }
    encode(text) {
        let cipher = [];
        text.split('').forEach((v, i) => {
            let shift = ALPHA.indexOf(v) + ALPHA.indexOf(this.key[i]);
            if (shift >= ALPHA.length) {
                shift -= ALPHA.length;
            }
            cipher.push(ALPHA[shift]);
        });
        return cipher.join('');
    }
    decode(text) {
        let decipher = [];
        text.split('').forEach((v, i) => {
            let shift = ALPHA.indexOf(v) - ALPHA.indexOf(this.key[i]);
            if (shift < 0) {
                shift += ALPHA.length;
            }
            decipher.push(ALPHA[shift]);
        });
        return decipher.join('');
    }
    generateRandomKey() {
        let retVal = '';
        for (let i = 0; i < 100; i++) {
            retVal += ALPHA[this.getRandom()];
        }
        return retVal;
    }
    getRandom() {
        return Math.floor(Math.random() * ALPHA.length);
    }
}
module.exports = Cipher;
