"use strict";
const template = (bottles, action, bottlesLeft) => {
    return `${bottles} of beer on the wall, ${bottles.toLowerCase()} of beer.\n${action}, ${bottlesLeft} of beer on the wall.\n`;
};
class ManyBottlesVerseBuilder {
    buildVerse(bottles) {
        return template(`${bottles} bottles`, 'Take one down and pass it around', `${bottles - 1} bottles`);
    }
    canHandleThisManyBottles(amount) {
        return amount > 2 && amount < 100;
    }
}
class TwoBottlesVerseBuilder {
    buildVerse(bottles) {
        return template(`${bottles} bottles`, 'Take one down and pass it around', '1 bottle');
    }
    canHandleThisManyBottles(amount) {
        return amount === 2;
    }
}
class OneBottleVerseBuilder {
    buildVerse(bottles) {
        return template('1 bottle', 'Take it down and pass it around', 'no more bottles');
    }
    canHandleThisManyBottles(amount) {
        return amount === 1;
    }
}
class NoMoreBottlesVerseBuilder {
    buildVerse(bottles) {
        return template('No more bottles', 'Go to the store and buy some more', '99 bottles');
    }
    canHandleThisManyBottles(amount) {
        return amount === 0;
    }
}
const verseBuilders = [
    new NoMoreBottlesVerseBuilder(),
    new OneBottleVerseBuilder(),
    new TwoBottlesVerseBuilder(),
    new ManyBottlesVerseBuilder()
];
class VerseBuilderFactory {
    constructor(builders) {
        this.builders = builders;
    }
    create(numBottles) {
        for (let builder of this.builders) {
            if (builder.canHandleThisManyBottles(numBottles)) {
                return builder;
            }
        }
        return null;
    }
}
class BeerSong {
    constructor() {
        this.builderFactory = new VerseBuilderFactory(verseBuilders);
    }
    verse(verseNumber) {
        return this.build(verseNumber);
    }
    sing(...params) {
        let song = [];
        if (params.length == 1) {
            params[1] = 0;
        }
        params.sort();
        for (let i = params[0]; i <= params[1]; i++) {
            let verse = this.build(i);
            song.push(verse);
        }
        return song.reverse().join('\n');
    }
    build(verseNumber) {
        let builder = this.builderFactory.create(verseNumber);
        return builder.buildVerse(verseNumber);
    }
}
module.exports = BeerSong;
