class Hamming {
  public compute(seqA: string = '', seqB: string = ''): number {
    if (seqA.length != seqB.length) {
      throw new Error('DNA strands must be of equal length.');
    }

    let hamming = 0;
    for (let i = 0; i < seqA.length; i++) {
      seqA[i] === seqB[i] ? void 0 : hamming++;
    }

    return hamming;
  }
}

export = Hamming;