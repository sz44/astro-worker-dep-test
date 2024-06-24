console.log("in main.js");

import _ from 'lodash';
import MyWorker from './worker?worker';
// const test = _.sample([1, 2, 3, 4]);
// console.log("in main.js test: ", test);

// const wrkPath = new URL("worker.js", import.meta.url);
// const worker = new Worker(new URL("worker.js", import.meta.url), {type: "module"});
const worker = new MyWorker();
