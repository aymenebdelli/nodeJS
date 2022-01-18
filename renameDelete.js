// file system renaming
const {rename} = require("fs");

rename("hello.txt", "helloAgain.txt", (err)=>{
    if (err){
        console.error(err)
        return
    }
    console.log("File renamed!")
})


// file system deleting
// const {unlink} = require("fs");

// unlink("helloAgain.txt", (err)=>{
//     if (err){
//         console.error(err)
//         return
//     }
//     console.log("File deleted!")
// })