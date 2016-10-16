const template = (bottles: string, action: string, bottlesLeft: string): string => {
    return `${bottles} of beer on the wall, ${bottles.toLowerCase()} of beer.\n${action}, ${bottlesLeft} of beer on the wall.\n`;  
}

interface IVerseBuilder {
  buildVerse(bottles?: number): string;
  canHandleThisManyBottles(amount: number): boolean;
}

class ManyBottlesVerseBuilder implements IVerseBuilder {
  public buildVerse(bottles?: number): string {
    return template(`${bottles} bottles`, 'Take one down and pass it around', `${bottles - 1} bottles`);
  }

  public canHandleThisManyBottles(amount: number): boolean {
    return amount > 2 && amount < 100;
  }
}

class TwoBottlesVerseBuilder implements IVerseBuilder {
  public buildVerse(bottles?: number): string {
    return template(`${bottles} bottles`, 'Take one down and pass it around', '1 bottle');
  }

  public canHandleThisManyBottles(amount: number): boolean {
    return amount === 2;
  }
}

class OneBottleVerseBuilder implements IVerseBuilder {
  public buildVerse(bottles?: number): string {
    return template('1 bottle', 'Take it down and pass it around', 'no more bottles');
  }

  public canHandleThisManyBottles(amount: number): boolean {
    return amount === 1;
  }
}

class NoMoreBottlesVerseBuilder implements IVerseBuilder {
  public buildVerse(bottles?: number): string {
    return template('No more bottles', 'Go to the store and buy some more', '99 bottles');
  }

  public canHandleThisManyBottles(amount: number): boolean {
    return amount === 0;
  }
}

const verseBuilders: IVerseBuilder[] = [
  new NoMoreBottlesVerseBuilder(),
  new OneBottleVerseBuilder(),
  new TwoBottlesVerseBuilder(),
  new ManyBottlesVerseBuilder()
]

class VerseBuilderFactory {
  constructor(private builders: IVerseBuilder[]) {}

  public create(numBottles: number): IVerseBuilder {
    for(let builder of this.builders) {
      if (builder.canHandleThisManyBottles(numBottles)) {
        return builder;
      }
    }

    return null;
  }
}

class BeerSong {
  private builder: IVerseBuilder;
  private builderFactory: VerseBuilderFactory;

  constructor() {
    this.builderFactory = new VerseBuilderFactory(verseBuilders);
  }

  public verse(verseNumber: number): string {
    return this.build(verseNumber);
  }

  public sing(...params: number[]): string {
    let song: string[] = [];

    if (params.length == 1) {
      params[1] = 0;
    }

    params.sort();

    for(let i = params[0]; i <= params[1]; i++) {
      let verse = this.build(i);
      song.push(verse);
    }

    return song.reverse().join('\n');
  }

  private build(verseNumber: number): string {
    let builder = this.builderFactory.create(verseNumber);
    return builder.buildVerse(verseNumber);
  }
}

export = BeerSong;