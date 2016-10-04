class Words {
  public count(sentence = ''): any {
    let words = sentence.trim().toLowerCase().split(/\s+/);
    let retVal = {};

    words.forEach((w) => {
      retVal[w] = typeof(retVal[w]) === 'number' ? ++retVal[w] : 1;
    });

    return retVal;
  }
}

export = Words;