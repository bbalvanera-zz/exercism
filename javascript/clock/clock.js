"use strict";
class Clock {
    constructor(hh = 0, mm = 0) {
        this.hours = 0;
        this.minutes = 0;
        this.processHours(hh);
        this.processMinutes(mm);
    }
    toString() {
        let h = `00${this.hours.toString()}`.substr(-2);
        let s = `00${this.minutes.toString()}`.substr(-2);
        return `${h}:${s}`;
    }
    equals(other) {
        return this.toString() === other.toString();
    }
    plus(mm) {
        this.processMinutes(this.minutes + mm);
        return this;
    }
    minus(mm) {
        return this.plus(-mm);
    }
    processHours(hh) {
        this.hours = (this.hours + hh) % 24;
        if (this.hours < 0) {
            this.hours += 24;
        }
    }
    processMinutes(mm) {
        this.processHours(mm / 60 | 0);
        this.minutes = mm % 60;
        if (mm < 0) {
            this.processHours(-1);
            this.minutes = 60 + this.minutes;
        }
    }
}
function at(hh, mm) {
    return new Clock(hh, mm);
}
exports.at = at;
