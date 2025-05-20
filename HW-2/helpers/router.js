const url = require('url');
const routes = {};

function addRoute(method, path, handler) {
    const key = `${method.toUpperCase()} ${path}`;
    routes[key] = handler;
}

function handle(req, res) {
    const URL = url.parse(req.url, true);
    const key = `${req.method} ${URL.pathname}`;
    const handler = routes[key];

    if(handler) {
        handler(req, res);
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({error: 'Not Found'}))
    }
}

module.exports = { addRoute, handle }
