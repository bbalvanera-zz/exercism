"use strict";
const oneEarthYear = 365.25 * 24 * 60 * 60; // days * hours * minutes * seconds
class SpaceAge {
    constructor(seconds) {
        this.seconds = seconds;
    }
    onEarth() {
        return this.getAge(1);
    }
    onMercury() {
        return this.getAge(0.2408467);
    }
    onVenus() {
        return this.getAge(0.61519726);
    }
    onMars() {
        return this.getAge(1.8808158);
    }
    onJupiter() {
        return this.getAge(11.862615);
    }
    onSaturn() {
        return this.getAge(29.447498);
    }
    onUranus() {
        return this.getAge(84.016846);
    }
    onNeptune() {
        return this.getAge(164.79132);
    }
    getAge(factor) {
        return this.round(this.seconds / (oneEarthYear * factor));
    }
    round(age) {
        return Math.round(age * 100) / 100;
    }
}
module.exports = SpaceAge;
