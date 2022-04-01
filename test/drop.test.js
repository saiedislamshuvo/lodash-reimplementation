import _ from 'lodash';
import drop from '../src/drop.js';
import dropRight from '../src/dropRight.js';
import dropRightWhile from '../src/dropRightWhile.js';
import dropWhile from '../src/dropWhile.js';

const array = [1, 2, 3, 4, 5, 6];

const lodashDropOutput = _.drop(array, 2);
console.log('lodashDropOutput', lodashDropOutput);

const dropOutput = drop(array, 2);
console.log('dropOutput', dropOutput);

const lodashDropRightOutput = _.dropRight(array, 2);
console.log('lodashDropRightOutput', lodashDropRightOutput);

const dropRightOutput = dropRight(array, 2);
console.log('dropRightOutput', dropRightOutput);

let users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': false }
];

const lodashDropRightWhileOutput = _.dropRightWhile(users, (e) => !e.active);
console.log('lodashDropRightWhileOutput', lodashDropRightWhileOutput);

const dropRightWhileOutput = dropRightWhile(users, (e) => !e.active);
console.log('dropRightWhileOutput', dropRightWhileOutput);

const lodashDropWhileOutput = _.dropWhile(users, (e) => e.active);
console.log('lodashDropWhileOutput', lodashDropWhileOutput);

const dropWhileOutput = dropWhile(users, (e) => e.active);
console.log('dropWhileOutput', dropWhileOutput);
