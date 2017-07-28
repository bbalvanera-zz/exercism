class Series {
    public digits: number[];

    constructor(private series: string) {
        this.digits = series.split('').map(v => Number(v));
    }

    public slices(length: number): number[][] {
        if (length > this.series.length)
            throw new Error('Slice size is too big.');

        const slices: number[][] = [];
        let i = 0;
        while ((i + length) <= this.series.length) {
            slices.push(this.digits.slice(i, i + length));
            i++;
        }
        
        return slices;
    }
}

export = Series;