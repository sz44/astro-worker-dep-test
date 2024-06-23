console.log("in main.js");

const wrkPath = new URL("worker.js", import.meta.url);
const worker = new Worker(wrkPath, {type: "module"});
