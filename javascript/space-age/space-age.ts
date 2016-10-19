const oneEarthYear = 365.25 * 24 * 60 * 60; // days * hours * minutes * seconds

class SpaceAge {
  constructor(private seconds) {}

  public onEarth(): number {
    return this.getAge(1);
  }

  public onMercury(): number {
    return this.getAge(0.2408467);
  }

  public onVenus(): number {
    return this.getAge(0.61519726);
  }

  public onMars(): number {
    return this.getAge(1.8808158);
  }

  public onJupiter(): number {
    return this.getAge(11.862615);
  }

  public onSaturn(): number {
    return this.getAge(29.447498);
  }

  public onUranus(): number {
    return this.getAge(84.016846);
  }

  public onNeptune(): number {
    return this.getAge(164.79132);
  }

  private getAge(factor: number) {
    return this.round(this.seconds / (oneEarthYear * factor));
  }

  private round(age: number) {
    return Math.round(age * 100) / 100;
  }
}

export = SpaceAge;