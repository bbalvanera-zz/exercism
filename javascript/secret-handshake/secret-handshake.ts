const commands = new Map<number, string>([[0x1, 'wink'], [0x2, 'double blink'], [0x4, 'close your eyes'], [0x8, 'jump']]);
const reverse = 0x10;

class SecretHandshake {
    constructor(private command: number = 0) {
        if (isNaN(command)) {
            throw new Error('Handshake must be a number');
        }
    }

    public commands(): string[] {
        let retVal: string[] = [];

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

export = SecretHandshake;
