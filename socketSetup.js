module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log(`User ${socket.id} connected`);

        socket.on('disconnect', () => {
            console.log(`User ${socket.id} disconnected`);
        });
    });

    const emitLiveOdds = (oddsData) => {
        io.emit('update-live-odds', oddsData);
    };

    return { emitLiveOdds };
};