import fs from "fs";
const compiled = new WebAssembly.Module(fs.readFileSync(`${__dirname}/build/optimized.wasm`));
const imports = {};
const { add } = new WebAssembly.Instance(compiled, imports).exports;

add(1, 2);
