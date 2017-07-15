"use strict";
module.exports = function accumulate(array = [], action) {
    if (action === undefined || action === null) {
        return array;
    }
    let retVal = [];
    for (const i of array) {
        retVal.push(action(i));
    }
    return retVal;
};
