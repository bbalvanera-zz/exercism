class Anagram {
  private original: string;
  private sorted: string;

  constructor(phrase: string) {
    this.original = phrase.toLowerCase();
    this.sorted = this.sort(this.original);
  }

  public matches(...words: any[]): string[] {
    let candidates: string[] = words;
    if (Array.isArray(words[0])) {
      candidates = words[0];
    }

    return candidates.filter((candidate: string): boolean => {
      candidate = candidate.toLowerCase();
      if (candidate === this.original) {
        return false;
      }

      candidate = this.sort(candidate);
      return this.sorted == candidate;
    });
  }

  private sort(word: string): string {
    return [...word].sort().join('');
  }
}

export = Anagram;