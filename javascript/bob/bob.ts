class Bob {
  public hey(what: string): string {
    let sentence = new Sentence(what);

    // Bob takes all caps as shouting regards if it ends with !
    if (sentence.allCaps()) return 'Whoa, chill out!';

    if (sentence.isQuestion()) return 'Sure.';
    
    if (sentence.isWhitespaceOnly()) return 'Fine. Be that way!';

    return 'Whatever.';
  }
}

class Sentence {
  constructor(private sentence: string) {
    this.removeUmlauts();
   }

  public containsWords(): boolean {
    return /[a-zA-Z]/.test(this.sentence);
  }

  public allCaps(): boolean {
    return this.containsWords() ? !(/[a-z]/.test(this.sentence)) : false; 
  }

  public isQuestion(): boolean {
    return this.sentence.endsWith('?');
  }

  public isWhitespaceOnly() {
    return this.sentence.trim().length === 0;
  }

  private removeUmlauts() {
    // no need to replace umlaut with correct latin char
    // just replace with proper case word.
    this.sentence = this.sentence.replace(upperUmlauts, 'A');
    this.sentence = this.sentence.replace(lowerUmlauts, 'a');
  }
}

const upperUmlauts = /[\xc4-\xdc]/;
const lowerUmlauts = /[\xe4-\xfc]/;

export = Bob;