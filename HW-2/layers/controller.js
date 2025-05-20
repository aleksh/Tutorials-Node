const service = require("./service");
const router = require("../helpers/router");
const url = require('url');

router.addRoute('GET', '/', (req, res) => {
    const data = service.getUsers();
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));
})

router.addRoute('GET', '/users', (req, res) => {
    const data = service.getUsers();
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));
})

router.addRoute('GET', '/user', (req, res) => {
    const userId = url.parse(req.url, true).query["id"];
    const data = service.getUser(userId);
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));
})

router.addRoute('POST', '/user', (req, res) => {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
        const userData = JSON.parse(body);
        const newUser = service.createUser(userData);
        res.writeHead(201, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(newUser));
    });
});

router.addRoute('PUT', '/user', (req, res) => {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
        const userData = JSON.parse(body);
        const user = service.updateUser(userData);
        res.writeHead(201, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(user));
    });
});

router.addRoute('DELETE', '/user', (req, res) => {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
        const userData = JSON.parse(body);
        const user = service.deleteUser(userData);
        res.writeHead(201, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(user));
    });
});

module.exports = router;