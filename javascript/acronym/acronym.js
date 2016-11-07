"use strict";
function toTitleCase(word) {
    return word.replace(/\w\S*/g, (match) => match.charAt(0).toUpperCase() + match.substr(1));
}
function getExistingAcronym(phrase) {
    const pattern = /[A-Z]{3,}/g;
    const result = phrase.match(pattern);
    if (result)
        return result[0];
}
function createAcronym(phrase) {
    phrase = phrase.replace('-', ' ');
    phrase = toTitleCase(phrase);
    return phrase.match(/([A-Z])/g).join('');
}
function parse(phrase) {
    if (!phrase || phrase.length === 0)
        return '';
    return getExistingAcronym(phrase) || createAcronym(phrase);
}
exports.parse = parse;
