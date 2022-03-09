import _ from 'lodash';
import difference from '../src/difference.js';


const array = [2, 1, 9];

const lodashOutput = _.difference(array, [2, 3, 5], [3, 4]);
console.log('lodashOutput', lodashOutput);

const differenceOutput = difference(array, [2, 3, 5], [3, 4]);
console.log('differenceOutput', differenceOutput);