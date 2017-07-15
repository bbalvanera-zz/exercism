export = function accumulate(array: any[] = [], action: (col: any[]) => any) {
    if (action === undefined || action === null) {
        return array;
    }

    let retVal = [];
    for (const i of array) {
        retVal.push(action(i));
    }

    return retVal;
};
