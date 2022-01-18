const dgram = require("dgram")
const PORT = 3333;
const HOST = '127.0.0.1';
// server

const server = dgram.createSocket("udp4");

// bind event name with event handler
server.on('listening', ()=> console.log('UDP server listening'));
server.on('message', (msg,rinfo)=>{
    console.log(`${rinfo.adress}:${rinfo.port} - ${msg}`)
})

server.bind(PORT,HOST);


// client
const client = dgram.createSocket("udp4");
const msg = Buffer.from('other side client side')

client.send(msg,0,msg.length, PORT,HOST, (err)=>{
    if (err) throw err;
    console.log('UDP message sent');
    client.close();
})