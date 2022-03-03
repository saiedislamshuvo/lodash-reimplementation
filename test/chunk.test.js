import _ from 'lodash';
import chunk from '../src/chunk.js';

const input = {
    arr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    size: 2,
}

const lodashOutput = _.chunk(input.arr, input.size);
console.log('lodashOutput', lodashOutput);

const chunkOutput = chunk(input.arr, input.size)
console.log('chunkOutput', chunkOutput);