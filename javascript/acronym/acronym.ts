function toTitleCase(word: string): string {
  return word.replace(/\w\S*/g, (match) => match.charAt(0).toUpperCase() + match.substr(1));
}

function getExistingAcronym(phrase: string): string {
  const pattern = /[A-Z]{3,}/g;
  const result = phrase.match(pattern);

  if (result)
    return result[0];
}

function createAcronym(phrase: string): string {
  phrase = phrase.replace('-', ' ');
  phrase = toTitleCase(phrase);

  return phrase.match(/([A-Z])/g).join('');
}

export function parse(phrase: string): string {
  if (!phrase || phrase.length === 0)
    return '';

  return getExistingAcronym(phrase) || createAcronym(phrase);
}