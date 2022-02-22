// import http
const http = require('http');

//import app
const app = require('./app')

//ustawienia portu servera
const port = process.env.port || 3000;

//tworzenie servera
const server = http.createServer(app);

//włączenie servera
server.listen(port);