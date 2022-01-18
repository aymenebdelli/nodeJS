// file system reading module
const { readFile, readFileSync } = require('fs')
// specify encoding type (utf8)
readFile('hi.txt', "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});


// asynchronous node
console.log("log from outside 1")

// synchronous node
try {
    const data = readFileSync("hi.txt", "utf-8");
    console.log(data);
} catch (err) {
    console.error(err);
}

console.log("log from outside 2");