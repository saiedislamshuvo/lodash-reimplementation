import _ from 'lodash';
import compact from '../src/compact.js';

const input = [0, 1, false, 2, '', 3, null, undefined, NaN];

const lodashOutput = _.compact(input);
console.log('lodashOutput', lodashOutput);

const compactOutput = compact(input);
console.log('compactOutput', compactOutput);