class List {
    public value = '';

    constructor(seed?: number[]) {
        if (seed) {
            this.value = seed.join(',');
        }
    }

    public compare(otherList: List): string {
        const set1 = new RegExp(this.value);
        const set2 = new RegExp(otherList.value);

        if (this.value === otherList.value) {
            return 'EQUAL';
        }
        
        if (set1.test(otherList.value)) {
            return 'SUBLIST';
        }

        if (set2.test(this.value)) {
            return 'SUPERLIST';
        }

        return 'UNEQUAL';
    }
}

export = List;