"use strict";
class RobotFactory {
    static asignName(robot) {
        this.resetName(robot);
    }
    static resetName(robot) {
        if (robot) {
            robot.name = this.generateRobotName();
        }
    }
    static generateRobotName() {
        let name;
        do {
            name = this.robotName();
        } while (this.nameExists(name));
        this.flagName(name);
        return name;
    }
    static robotName() {
        return String.fromCharCode(this.getFixedRandom(65, 91), this.getFixedRandom(65, 91)) +
            this.getFixedRandom(100, 1000).toString();
    }
    static flagName(name) {
        this.flaggedNames.push(name);
    }
    static nameExists(name) {
        return this.flaggedNames.includes(name);
    }
    static getFixedRandom(min, max) {
        return (Math.random() * (max - min) + min) | 0;
    }
}
RobotFactory.flaggedNames = [];
module.exports = RobotFactory;
