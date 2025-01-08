//server

const http = require('http');

const port = 7701;

const allowOrigin = "http://192.168.1.10:8081"; //这个是我本地客户端的origin（源）

const server = http.createServer ((request, response) => {
    if (allowOrigin == request.headers.origin)
    {
        response.setHeader("Access-Control-Allow-Origin", allowOrigin);
    }

    if ('/config' == request.url)
    {
        response.end(JSON.stringify({
            name : "Frankie",
            age : 20
        }))
    }
});

server.listen(port);