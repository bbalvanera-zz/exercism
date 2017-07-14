class Raindrops {
    convert(num: number): string {
        let rainspeak = '';
        
        if (num % 3 === 0) {
            rainspeak += 'Pling';
        }
        if (num % 5 === 0) {
            rainspeak += 'Plang';
        }
        if (num % 7 === 0) {
            rainspeak += 'Plong';
        }
        
        if (rainspeak.length === 0)
            rainspeak = num.toString();
        
        return rainspeak;
    }
}

export = Raindrops;