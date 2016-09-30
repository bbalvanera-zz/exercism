class Year {
  constructor(private year: number) { }

  public isLeap(): boolean {
    if (isCenturialYear(this.year)) {
      return isCenturialLeap(this.year);
    }

    return this.year % 4 === 0;
  }
}

function isCenturialYear(year: number): boolean {
  return year % 100 === 0;
}

function isCenturialLeap(year: number): boolean {
  return year % 400 === 0;
}

export = Year;