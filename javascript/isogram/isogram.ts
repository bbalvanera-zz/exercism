class Isogram {
  private split: string[] = [];
  private isogram = true;

  constructor(phrase: string) {
    let letters = phrase.toLowerCase().replace(/\s|-/g, '').split('');

    for (let s of letters) {
      if (this.split.indexOf(s) >= 0) {
        this.isogram = false;
      }
      this.split.push(s);
    }
  }

  public isIsogram(): boolean {
    return this.isogram;
  }
}
export = Isogram;