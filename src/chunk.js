// Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

// _.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

// _.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

const chunk = (arr, size) => {
    return arr.reduce((acc, cur, index) => {
        if (index % size == 0) {
            return [...acc, [cur]]
        } else {
            return [...acc.slice(0, -1), [...acc.slice(-1)[0], cur]];
        }
    }, []);
}

export default chunk;