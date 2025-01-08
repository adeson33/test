const http = require('http');

const url = require('url');

const hostname = '127.0.0.1';

const port = 3000;

const server = http.createServer((req, res) =>
{
    //第二个参数为true,表示解析查询成功
    const parsedUrl = url.parse(req.url, true);

    //检查请求方法和URL路径
    if (req.method === 'GET' && parsedUrl.pathname === "/ping")
    {
        res.statusCode = 200;
        
        //设置响应头部,内容为 JSON
        res.setHeader('Content-Type', 'application/json');

        //获取查询参数
        const queryParams = parsedUrl.query;

        //将查询参数转为JSON字符串
        const response = JSON.stringify(queryParams);

        //返回状态码200和查询参数
        res.writeHead(200);

        res.end(response);
    }
    else if (req.method === 'Post')
    {
        res.statusCode = 200;

        res.setHeader('Content-Type', 'text/plAIn');
    
        res.end('Hello World\n');
    }
    //对于其他请求，返回404
    else
    {
        res.writeHead(404);
        res.end('Resource not found');
    }
});

server.listen(port, hostname, () =>{

    console.log('Server running at http://${hostname}:${port}/');
})