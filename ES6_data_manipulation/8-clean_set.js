function cleanSet(mySet, startString) {
    if (!(mySet instanceof Set)) return '';

    const filtered = Array.from(mySet)
        .filter(value => typeof value === 'string' && value.startsWith(startString))
        .map(value => value.slice(startString.length));

    return filtered.join('-');
}


const mySet = new Set(['applePie', 'appleJuice', 'banana', 'appleCider']);
console.log(cleanSet(mySet, 'apple'));
