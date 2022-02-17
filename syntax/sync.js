const fs = require('fs');

const start1 = new Date();
console.log('A');
const result = fs.readFileSync('nodejs/sample.txt', 'utf8');
console.log(result);
console.log('C');
const end1 = new Date();
const time1 = end1 - start1;
console.log('1st: ' + time1 + '\n\n');

const start2 = new Date();
console.log('A');
fs.readFile('nodejs/sample.txt', 'utf8', function(error, result) {
    console.log(result);
});
console.log('C');
const end2 = new Date();
const time2 = end2 - start2;
console.log('2nd: ' + time2 + '\n\n');