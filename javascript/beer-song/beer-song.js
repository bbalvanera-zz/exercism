"use strict";
class BeerSong {
    constructor() {
        this.verses = [];
        for (let i = 99; i >= 0; i--) {
            if (i <= 99 && i > 1) {
                this.verses[i] = `${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${i - 1} ${i === 2 ? 'bottle' : 'bottles'} of beer on the wall.\n`;
            }
            else if (i === 1) {
                this.verses[i] = `${i} bottle of beer on the wall, ${i} bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n`;
            }
            else if (i === 0) {
                this.verses[i] = `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`;
            }
        }
    }
    verse(verseNumber) {
        return this.verses[verseNumber];
    }
    sing(...params) {
        params.sort();
        let song = this.verses;
        if (params.length === 1) {
            song = this.verses.slice(0, params[0] + 1);
        }
        if (params.length === 2) {
            song = this.verses.slice(params[0], params[1] + 1);
        }
        return song.reverse().join('\n');
    }
}
const fragments = {
    plural: ['bottles of beer'],
    singular: ['bottle of beer', 'No more'],
    common: ['on the wall', 'Take one down and pass it around']
};
module.exports = BeerSong;
