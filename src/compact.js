// _.compact([0, 1, false, 2, '', 3, null, undefined, NaN]);
// => [1, 2, 3]

/**
 * Creates an array with all falsey values removed.
 * The values false, null, 0, "", undefined, and NaN are falsey.
 * @param {[]} arr 
 * @returns []
 */
const compact = (arr) => {
    return arr.reduce((acc, cur) => {
        return cur ? [...acc, cur] : [...acc];
    }, []);
}

export default compact;