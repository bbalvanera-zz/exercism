"use strict";
class Gigasecond {
    constructor(initialDate) {
        this.ticks = initialDate.valueOf();
        this.then = this.ticks + Gigasecond.ToMilliseconds();
    }
    date() {
        return new Date(this.then);
    }
    static ToMilliseconds() {
        return 1e9 * 1e3;
    }
}
module.exports = Gigasecond;
