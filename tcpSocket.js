const net = require("net")

const server = net.createServer(socket =>{
    socket.write("Hello.")
    // bind event with event handler
    socket.on("data", data =>{
        console.log(data.toString())
    })
})

server.listen(8080);