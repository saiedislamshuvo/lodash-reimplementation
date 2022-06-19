// _.difference([2, 1], [2, 3]);
// => [1]

/**
 * Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. 
 * The order and references of result values are determined by the first array.
 * @param {[]} array 
 * @param  {[]} arr 
 * @returns []
 */
const difference = (array, ...arr) => {
    const concatArr = arr.reduce((acc, cur) => {
        return cur instanceof Array ? [...acc, ...cur] : [...acc, cur];
    }, []);

    return array.reduce((acc, cur) => {
        return concatArr.includes(cur) ? [...acc] : [...acc, cur];
    }, []);
}

export default difference;
