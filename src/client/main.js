console.log("in main.js");

import { pipeline } from '@xenova/transformers';

// Allocate a pipeline for sentiment-analysis
let pipe = await pipeline('sentiment-analysis');

let out = await pipe('I hate transformers!');
console.log(out[0]); // [{'label': 'POSITIVE', 'score': 0.999817686}]