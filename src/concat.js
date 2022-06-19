// var array = [1];
// var other = _.concat(array, 2, [3], [[4]]);

// console.log(other);
// => [1, 2, 3, [4]]
// console.log(array);
// => [1]

/**
 * Creates a new array concatenating array with any additional arrays and / or values.
 * @param  {[]} arr 
 * @returns []
 */
const concat = (...arr) => {
    return arr.reduce((acc, cur) => {
        return cur instanceof Array ? [...acc, ...cur] : [...acc, cur];
    }, []);
}

export default concat;