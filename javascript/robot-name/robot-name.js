"use strict";
let Factory = require('./robot-factory');
class Robot {
    constructor() {
        Factory.assignName(this);
    }
    reset() {
        Factory.resetName(this);
    }
}
module.exports = Robot;
