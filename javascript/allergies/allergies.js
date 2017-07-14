"use strict";
const allergyList = [
    { name: 'eggs', score: 1 },
    { name: 'peanuts', score: 2 },
    { name: 'shellfish', score: 4 },
    { name: 'strawberries', score: 8 },
    { name: 'tomatoes', score: 0x10 },
    { name: 'chocolate', score: 0x20 },
    { name: 'pollen', score: 0x40 },
    { name: 'cats', score: 0x80 }
];
class Allergies {
    constructor(score) {
        this.allergies = allergyList.filter(allergy => {
            return (score & allergy.score) === allergy.score;
        }).map(allergy => {
            return allergy.name;
        });
    }
    list() {
        return this.allergies;
    }
    allergicTo(allergy = '') {
        if (allergy.length === 0) {
            return false;
        }
        return this.allergies.indexOf(allergy) > -1;
    }
}
module.exports = Allergies;
