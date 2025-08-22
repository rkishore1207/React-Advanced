const { readFileSync } = require("fs");
const {createServer} = require("http");
const { parse } = require("url");

const server = createServer((req, res)=>{
    const pathName = parse(req.url, true).pathname;
    const htmlTemplate = readFileSync(`${__dirname}/index.html`);
    if(pathName === "/"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(htmlTemplate);
    }
    else if (pathName === "/test")
        res.end("Test Url");
    else
        res.end("Url is not found");
});

server.listen(8000, () => console.log("Server is listening on port number 8000"));