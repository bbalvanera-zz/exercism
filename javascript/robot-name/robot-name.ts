import { IRobot } from './irobot';
let Factory = require('./robot-factory');

class Robot implements IRobot  {
  public name: string;

  constructor() {
    Factory.assignName(this);
  }

  public reset() {
    Factory.resetName(this);
  }
}

export = Robot;