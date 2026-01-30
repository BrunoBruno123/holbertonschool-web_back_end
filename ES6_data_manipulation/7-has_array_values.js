export default function hasValuesFromArray(set, arr) {
    return arr.every(item => set.has(item));
    }
const mySet = new Set([1, 2, 3, 4, 5]);
const myArray = [2, 3];
const myArray2 = [2, 6];