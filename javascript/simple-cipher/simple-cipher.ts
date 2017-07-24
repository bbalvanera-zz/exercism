const ALPHA = 'abcdefghijklmnopqrstuvwxyz';

class Cipher {
    constructor(public key: string) {
        if (this.key === undefined) {
            this.key = this.generateRandomKey();
        }
        
        if (!this.key || this.key.length === 0 || this.key.match(/[\dA-Z]/)) {
            throw new Error('Bad key');
        }
    }

    public encode(text: string): string {
        let cipher: string[] = [];
        
        text.split('').forEach((v, i) => {
            let shift = ALPHA.indexOf(v) + ALPHA.indexOf(this.key[i]);

            if (shift >= ALPHA.length) {
                shift -= ALPHA.length;
            }

            cipher.push(ALPHA[shift]);
        });

        return cipher.join('');
    }

    public decode(text: string): string {
        let decipher: string[] = [];

        text.split('').forEach((v, i) => {
            let shift = ALPHA.indexOf(v) - ALPHA.indexOf(this.key[i]);

            if (shift < 0) {
                shift += ALPHA.length;
            }

            decipher.push(ALPHA[shift]);
        });

        return decipher.join('');
    }

    private generateRandomKey(): string {
        let retVal = '';
        for (let i = 0; i < 100; i++) {
            retVal += ALPHA[this.getRandom()];
        }

        return retVal;
    }

    private getRandom(): number {
        return Math.floor(Math.random() * ALPHA.length);
    }
}

export = Cipher;