// Import event module
const events = require('events')

// Create an eventEmitter object 
const eventEmitter = new events.EventEmitter();

// Create an event handler as follows
const connectHandler = () =>{
    console.log("connection succesful.");

    // fire the data_received event
    eventEmitter.emit("data_received");
}

// Bind the connection event with the handler
eventEmitter.on('connection' , connectHandler)

// bind the data_received event with anonymous function
eventEmitter.on('data_received' , ()=> console.log('data received successfully.')
);

// fire event connection
 eventEmitter.emit('connection')
 console.log('Program End')