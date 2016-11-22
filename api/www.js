"use strict";
const app_1 = require('./app');
const debugModule = require('debug');
const http = require('http');
const debug = debugModule('node-express-typescript:server');
// Get port from environment and store in Express.
const port = normalizePort(process.env.PORT || '3000');
app_1.default.set('port', port);
// create server and listen on provided port (on all network interfaces).
const server = http.createServer(app_1.default);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
// this function is called when you want the server to die gracefully
// i.e. wait for existing connections
var gracefulShutdown = function () {
    console.log("Received kill signal, shutting down gracefully.");
    server.close(function () {
        console.log("Closed out remaining connections.");
        process.exit();
    });
    // if after
    setTimeout(function () {
        console.error("Could not close connections in time, forcefully shutting down");
        process.exit();
    }, 2 * 1000);
};
// listen for TERM signal .e.g. kill
process.on('SIGTERM', gracefulShutdown);
// listen for INT signal e.g. Ctrl-C
process.on('SIGINT', gracefulShutdown);
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    let port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    let bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    let addr = server.address();
    let bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
//# sourceMappingURL=www.js.map