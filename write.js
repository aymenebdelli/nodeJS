// file system writing module
const { writeFile, writeFileSync ,appendFile } = require('fs')
// asynchronous
const newContent = "This is some new text"

writeFile('hi.txt', newContent ,{flag :"a"} ,(err)=>{
    if (err){
        console.error(err);
        return;
    }
    console.log("Content written!");
})

// synchronous
try{
    writeFileSync("hi.txt", newContent);
    console.log("Content written!");
} catch(err){
    console.error(err);
}
// appendFile
 const otherContent ="\n this is some more new text";
 appendFile('hi.txt', otherContent, (err)=>{
     if (err){
         console.error(err)
         return
     }
     console.log("Content written!")
 })