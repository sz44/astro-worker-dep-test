console.log("in main.js");

const wrkPath = new URL("worker.js", import.meta.url);
// failed
// const worker = new Worker("/src/client/worker.js", {type: "module"});
const worker = new Worker(wrkPath, {type: "module"});

console.log("import.meta.url: ", import.meta.url);
console.log("wrkPath: ", wrkPath);
console.log("wrkPath.toStrint(): ", wrkPath.toString());

// const worker = new Worker("/src/client/worker.js", {type: "module"});
