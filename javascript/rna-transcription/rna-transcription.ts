class DnaTranscriber {
  public toRna(dna: string =''): string {
    return dna.split('').map((v) => rna[v]).join('');
  }
}

const rna = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
}

export = DnaTranscriber;