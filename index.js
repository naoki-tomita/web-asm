const fs = require("fs");
const compiled = new WebAssembly.Module(fs.readFileSync(__dirname + "/build/optimized.wasm"));
const imports = {};
const { add } = new WebAssembly.Instance(compiled, imports).exports;

console.log(add(1, 2));