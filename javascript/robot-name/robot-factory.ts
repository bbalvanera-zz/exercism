import { IRobot } from './irobot';

class RobotFactory {
  private static flaggedNames: string[] = [];

  static asignName(robot: IRobot): void {
    this.resetName(robot);
  }

  static resetName(robot: IRobot) {
    if (robot) {
      robot.name = this.generateRobotName();
    }
  }

  private static generateRobotName(): string {
    let name: string;
    do {
      name = this.robotName();
    } while (this.nameExists(name));

    this.flagName(name);

    return name;
  }

  private static robotName(): string {
    return String.fromCharCode(
      this.getFixedRandom(65, 91),
      this.getFixedRandom(65, 91)
    ) +
      this.getFixedRandom(100, 1000).toString();
  }

  private static flagName(name: string): void {
    this.flaggedNames.push(name);
  }

  private static nameExists(name: string): boolean {
    return this.flaggedNames.includes(name);
  }

  private static getFixedRandom(min: number, max: number): number {
    return (Math.random() * (max - min) + min) | 0;
  }
}

export = RobotFactory;