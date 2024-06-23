console.log("in worker.js");

import _ from 'lodash';

const test = _.sample([1, 2, 3, 4]);
console.log({test});