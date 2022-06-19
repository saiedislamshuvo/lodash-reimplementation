// _.drop([1, 2, 3]);
// => [2, 3]

// _.drop([1, 2, 3], 2);
// => [3]

// _.drop([1, 2, 3], 5);
// => []

// _.drop([1, 2, 3], 0);
// => [1, 2, 3]

/**
 * Creates a slice of array with n elements dropped from the beginning.
 * @param {[]} arr 
 * @param {number} n 
 * @returns []
 */
const drop = (arr, n = 1) => arr.slice(n);

export default drop;
