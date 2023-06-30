const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
require('dotenv').config()
const { Server } = require("socket.io");
// const io = new Server(server);
const io = new Server(server, {
	cors: {
		origin: 'http://localhost:3001'
	}
});

// io.on('new-message', (message) => {
// 	console.log('save message to database', message)
// 	io.emit('show-message', message)
// })

io.on("connection", (socket) => {
	// socket.on("hello", (arg) => {
	// 	console.log(arg); // world
	// });
	socket.on('new-message', (message) => {
		socket.emit('show-message', message)
	})
});

server.listen(process.env.PORT, () => {
	console.log('listening on *: ' + process.env.PORT);
});