class Pangram {
  private pangram: boolean;

  constructor(phrase: string = '') {
    let alphabet = new Uint8Array(26); // 26 letters in alphabet

    phrase.toLowerCase().replace(/[^a-z]/, '').split('').forEach((v: string) => {
        let pos = v.charCodeAt(0) - 97; // lowercase 'a' starts at 97 in ascii table.
        alphabet[pos] = 1;
    });
    alphabet = alphabet.filter((v: number): boolean => v === 1);
    this.pangram = alphabet.length === 26;
  }

  public isPangram(): boolean {
    return this.pangram;
  }
}

export = Pangram;