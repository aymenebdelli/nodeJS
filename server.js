const http = require("http");

const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 5000;


const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World");
});

server.listen(PORT,HOSTNAME,()=>{
    console.log(`Server is running at http://${HOSTNAME}:${PORT}`)
})
// global properties
global.__dirname
global.__filename
