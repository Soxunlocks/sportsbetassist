const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
require('dotenv').config();
const connectDB = require('./config/db');

connectDB();

const app = express();
app.use(express.json());
const server = http.createServer(app);
const io = new Server(server);

const session = require('express-session');
const sessionConfig = require('./config/sessionConfig')(process.env.MONGO_URI);

app.use(session(sessionConfig));

const socketSetup = require('./socketSetup')(io);
app.use('/', require('./routes/index'));

app.emitLiveOdds = socketSetup.emitLiveOdds;

const userPreferencesRouter = require('./routes/userPreferences');
app.use('/user-preferences', userPreferencesRouter);

const liveOddsRouter = require('./routes/liveOdds');
app.use('/live-odds', liveOddsRouter);

const adviceRouter = require('./routes/advice');
app.use('/api/advice', adviceRouter);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});
module.exports = app;
