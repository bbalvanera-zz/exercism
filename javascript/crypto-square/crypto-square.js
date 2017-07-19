"use strict";
class Crypto {
    constructor(text = '') {
        this.segments = [];
        this.normalized = text.trim().toLowerCase().replace(/\W/g, '');
        this.rect = this.getRect(this.normalized.length);
        const ciphers = new Array(this.rect.width).fill('');
        for (let i = 0; i < this.rect.height; i++) {
            const segment = this.normalized.substr(i * this.rect.width, this.rect.width);
            this.segments.push(segment);
            for (let j = 0; j < this.rect.width; j++) {
                ciphers[j] += segment.charAt(j);
            }
        }
        this.cipher = ciphers.join('');
    }
    normalizePlaintext() {
        return this.normalized;
    }
    plaintextSegments() {
        return this.segments;
    }
    size() {
        return this.rect.width;
    }
    ciphertext() {
        return this.cipher;
    }
    getRect(aproxArea) {
        let w = aproxArea;
        let h = 1;
        while (w < h || (w - h > 1)) {
            h++;
            w = Math.ceil(aproxArea / h);
        }
        return {
            width: w,
            height: h
        };
    }
}
module.exports = Crypto;
