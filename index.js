const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

// let a = `\\   /\\`;
// let b = `)  ( ')`;
// let c = `(  /  )`;
// let d = `\\(__)|`;
// console.log(a + "\n" + b + "\n" + c + "\n" + d);

console.log(`\\    /\\`);
console.log(` )  ( ')`);
console.log(`(  /  )`);
console.log(` \\(__)|`);

// ₩₩ 두개 써줘도 \표시 가능
