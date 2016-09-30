"use strict";
var Year = (function () {
    function Year(year) {
        this.year = year;
    }
    Year.prototype.isLeap = function () {
        if (isCenturialYear(this.year)) {
            return isCenturialLeap(this.year);
        }
        return this.year % 4 === 0;
    };
    return Year;
}());
function isCenturialYear(year) {
    return year % 100 === 0;
}
function isCenturialLeap(year) {
    return year % 400 === 0;
}
module.exports = Year;
