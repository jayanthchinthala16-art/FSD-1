import fs from 'fs';
console.log("Program Started");
fs.writeFileSync("sample.txt", "Hello World");
const data = fs.readFileSync("sample.txt", "utf8");
console.log("File Content:");
console.log(data);
console.log("Program Ended");