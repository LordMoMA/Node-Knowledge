import net from 'net';
import dgram from 'dgram';

// TCP
const serverTCP = net.createServer((socket) => {
    socket.end('Hello from TCP server!\n');
});

serverTCP.on('error', (error) => {
    console.error('An error occurred:', error);
});

serverTCP.listen(1234, () => {
    console.log('Server listening on port 1234');
});

// UDP
const serverUDP = dgram.createSocket('udp4');

serverUDP.on('message', (msg, rinfo) => {
    console.log(`Server received: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

serverUDP.bind(1234);

// WebSocket
const serverWS = new WebSocket.Server({ port: 1234 });

serverWS.on('connection', ws => {
    ws.on('message', message => {
        console.log('Received:', message);
    });

    ws.send('Hello from WebSocket server!');
});