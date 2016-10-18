"use strict";
class FoodChain {
    constructor() {
        AnimalVerses.init();
    }
    verse(num) {
        let animal = AnimalVerses.getAnimalById(num);
        let verse = new Verse(animal);
        return verse.build();
    }
    verses(start, end) {
        let returnValue = '';
        for (let i = start; i <= end; i++) {
            returnValue += this.verse(i) + '\n';
        }
        return returnValue;
    }
}
class AnimalVerses {
    static init() {
        this.link({
            id: 1,
            name: 'fly'
        });
        this.link({
            id: 2,
            name: 'spider',
            altName: 'spider that wriggled and jiggled and tickled inside her',
            phrase: 'It wriggled and jiggled and tickled inside her.'
        });
        this.link({
            id: 3,
            name: 'bird',
            phrase: 'How absurd to swallow a bird!'
        });
        this.link({
            id: 4,
            name: 'cat',
            phrase: 'Imagine that, to swallow a cat!'
        });
        this.link({
            id: 5,
            name: 'dog',
            phrase: 'What a hog, to swallow a dog!'
        });
        this.link({
            id: 6,
            name: 'goat',
            phrase: 'Just opened her throat and swallowed a goat!'
        });
        this.link({
            id: 7,
            name: 'cow',
            phrase: 'I don\'t know how she swallowed a cow!'
        });
        this.link({
            id: 8,
            name: 'horse',
            phrase: 'She\'s dead, of course!',
            kills: true
        });
    }
    static getAnimalById(id) {
        let temp = this.lastAnimal;
        while (temp) {
            if (temp.id == id) {
                return temp;
            }
            temp = temp.previousAnimal;
        }
        return null;
    }
    static link(newAnimal) {
        if (this.lastAnimal === null) {
            this.lastAnimal = newAnimal;
        }
        else {
            let previousAnimal = this.lastAnimal;
            newAnimal.previousAnimal = previousAnimal;
            this.lastAnimal = newAnimal;
        }
    }
}
AnimalVerses.lastAnimal = null;
class Verse {
    constructor(animal) {
        this.animal = animal;
        this.start = `I know an old lady who swallowed a ${animal.name}.\n`;
        this.end = `I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n`;
        if (animal.phrase) {
            this.phrase = `${animal.phrase}\n`;
        }
    }
    build() {
        let verse = [];
        verse.push(this.start);
        if (this.phrase) {
            verse.push(this.phrase);
        }
        if (this.animal.kills) {
            return verse.join('');
        }
        let currentAnimal = this.animal;
        while (currentAnimal.previousAnimal) {
            let previousAnimal = currentAnimal.previousAnimal;
            verse.push(`She swallowed the ${currentAnimal.name} to catch the ${previousAnimal.altName || previousAnimal.name}.\n`);
            currentAnimal = currentAnimal.previousAnimal;
        }
        verse.push(this.end);
        return verse.join('');
    }
}
module.exports = FoodChain;
