class Crypto {
    private normalized: string;
    private rect: { height: number, width: number};
    private segments: string[];
    private cipher: string;

    constructor(text: string = '') {
        this.segments = [];
        this.normalized = text.trim().toLowerCase().replace(/\W/g, '');
        this.rect = this.getRect(this.normalized.length);
        
        const ciphers = new Array<string>(this.rect.width).fill('');
        for (let i = 0; i < this.rect.height; i++) {
            const segment = this.normalized.substr(i * this.rect.width, this.rect.width);
            this.segments.push(segment);
            
            
            for (let j = 0; j < this.rect.width; j++) {
                ciphers[j] += segment.charAt(j);
            }
        }

        this.cipher = ciphers.join('');
    }

    public normalizePlaintext(): string {
        return this.normalized;
    }

    public plaintextSegments(): string[] {
        return this.segments;
    }

    public size(): number {
        return this.rect.width;
    }

    public ciphertext(): string {
        return this.cipher;
    }

    private getRect(aproxArea: number): { width: number, height: number} {
        let w = aproxArea;
        let h = 1;

        while(w < h || (w - h > 1)) {
            h++;
            w = Math.ceil(aproxArea / h);
        }

        return {
            width: w,
            height: h
        };
    }
}

export = Crypto;