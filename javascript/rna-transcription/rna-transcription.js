"use strict";
class DnaTranscriber {
    toRna(dna = '') {
        return dna.split('').map((v) => rna[v]).join('');
    }
}
const rna = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
};
module.exports = DnaTranscriber;
