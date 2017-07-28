"use strict";
const commands = new Map([[0x1, 'wink'], [0x2, 'double blink'], [0x4, 'close your eyes'], [0x8, 'jump']]);
const reverse = 0x10;
class SecretHandshake {
    constructor(command = 0) {
        this.command = command;
        if (isNaN(command)) {
            throw new Error('Handshake must be a number');
        }
    }
    commands() {
        let retVal = [];
        for (const [command, action] of commands) {
            if ((this.command & command) === command) {
                retVal.push(action);
            }
        }
        if ((this.command & reverse) === reverse) {
            retVal = retVal.reverse();
        }
        return retVal;
    }
}
module.exports = SecretHandshake;
