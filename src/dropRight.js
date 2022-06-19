// _.dropRight([1, 2, 3]);
// => [1, 2]

// _.dropRight([1, 2, 3], 2);
// => [1]

// _.dropRight([1, 2, 3], 5);
// => []

// _.dropRight([1, 2, 3], 0);
// => [1, 2, 3]

/**
 * Creates a slice of array with n elements dropped from the end.
 * @param {[]} arr 
 * @param {number} n 
 * @returns []
 */
const dropRight = (arr, n) => [...arr].reverse().slice(n).reverse();

export default dropRight;