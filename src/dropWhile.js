/**
 * Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. 
 * The predicate is invoked with three arguments: (value, index, array).
 * @param {[]} arr 
 * @param {Function} cb 
 * @returns []
 */
const dropWhile = (arr, cb) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) count++;
        else break;
    }
    return arr.slice(count);
};

export default dropWhile;