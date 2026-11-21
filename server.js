import http from 'http';
const server = http.createServer((request, response) => {
    response.writeHead(200,{'Content-Type': 'text/html'});
    response.write('<h1>Hello world</h1>');
    response.end();
});
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});