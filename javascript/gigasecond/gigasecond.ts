class Gigasecond {
  private ticks: number;
  private then: number;

  constructor(private initialDate: Date) {
    this.ticks = this.initialDate.valueOf();
    this.then = this.ticks + Gigasecond.ToMilliseconds();  
  }

  public date() {
    return new Date(this.then);  
  }

  public static ToMilliseconds() {
    return 1e9 * 1e3;
  }
}

export = Gigasecond;