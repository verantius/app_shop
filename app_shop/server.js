// import http
const http = require('http');
//ustawienia portu servera
const port = process.env.port || 3000;
//tworzenie servera
const server = http.createServer();
//włączenie sservera
server.listen(port);