const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use((req, res, next) => {
    req.io = io;
    next();
})

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))

mongoose.connect('mongodb+srv://dbUser:3bbXZEWTmq3rtnjS@cluster0-lun0k.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true})

app.use(require('./routes'));

server.listen(3333, () => {
    console.log('Server running on port 3333');
});