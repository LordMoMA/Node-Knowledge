import net from 'net';

// Handler
function handleSocket(socket) {
    try{
        socket.on('data', (data) => {
            console.log(`Received: ${data}`);
            socket.write('Echo: ' + data);
        });
    
        socket.on('end', () => {
            console.log('Client disconnected');
        });
    } catch (error) {
        console.log('Error: ', error);
    }
}

// Reactor
const server = net.createServer(handleSocket);

server.listen(8080, () => {
    console.log('Server listening on port 8080');
});