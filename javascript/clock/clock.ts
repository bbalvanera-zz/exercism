class Clock {
  private hours: number = 0;
  private minutes: number = 0;

  constructor(hh: number = 0, mm: number = 0) {
    this.processHours(hh);
    this.processMinutes(mm);
  }

  public toString() {
    let h = `00${this.hours.toString()}`.substr(-2);
    let s = `00${this.minutes.toString()}`.substr(-2);

    return `${h}:${s}`;
  }

  public equals(other: Clock) {
    return this.toString() === other.toString();
  }

  public plus(mm: number) {
    this.processMinutes(this.minutes + mm);

    return this;
  }

  public minus(mm: number) {
    return this.plus(-mm);
  }

  private processHours(hh: number) {
    this.hours = (this.hours + hh) % 24;

    if (this.hours < 0) {
      this.hours += 24;
    }
  }

  private processMinutes(mm: number) {
    this.processHours(mm / 60 | 0);
    this.minutes = mm % 60;

    if (mm < 0) {
      this.processHours(-1);
      this.minutes = 60 + this.minutes;
    }
  }
}

export function at(hh: number, mm: number) {
  return new Clock(hh, mm);
}

