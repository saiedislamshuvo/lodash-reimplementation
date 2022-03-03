import _ from 'lodash';
import concat from '../src/concat.js';

const array = [1];

const lodashOutput = _.concat(array, 2, [3], [[4]]);
console.log('lodashOutput', lodashOutput);

const concatOutput = concat(array, 2, [3, 4], [[4], [5]]);
console.log('concatOutput', concatOutput);