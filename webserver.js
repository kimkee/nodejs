const http = require('http');

const hostname = '192.168.0.200';
const port = 1337;

http.createServer((req, res) => {
	
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Nodejs Hello World\nㅋㅋㅋㅋ');
}).listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});