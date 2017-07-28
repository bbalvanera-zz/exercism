"use strict";
class Series {
    constructor(series) {
        this.series = series;
        this.digits = series.split('').map(v => Number(v));
    }
    slices(length) {
        if (length > this.series.length)
            throw new Error('Slice size is too big.');
        const slices = [];
        let i = 0;
        while ((i + length) <= this.series.length) {
            slices.push(this.digits.slice(i, i + length));
            i++;
        }
        return slices;
    }
}
module.exports = Series;
