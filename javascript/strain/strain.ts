let toKeep: any[];
let toDiscard: any[];

function keep(array: any[] = [], predicate: (item: any) => boolean): any[] {
    filter(array, predicate);
    return toKeep;
}

function discard(array: any[] = [], predicate: (item: any) => boolean): any[] {
    filter(array, predicate);
    return toDiscard;
}

function filter(array: any[] = [], predicate: (item: any) => boolean): any[] {
    toKeep = [];
    toDiscard = [];

    for (var i = 0; i < array.length; i++) {
        var e = array[i];
        predicate(e) ? toKeep.push(e) : toDiscard.push(e);
    }
}

export = {
    keep,
    discard
}