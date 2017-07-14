"use strict";
let toKeep;
let toDiscard;
function keep(array = [], predicate) {
    filter(array, predicate);
    return toKeep;
}
function discard(array = [], predicate) {
    filter(array, predicate);
    return toDiscard;
}
function filter(array = [], predicate) {
    toKeep = [];
    toDiscard = [];
    for (var i = 0; i < array.length; i++) {
        var e = array[i];
        predicate(e) ? toKeep.push(e) : toDiscard.push(e);
    }
}
module.exports = {
    keep,
    discard
};
