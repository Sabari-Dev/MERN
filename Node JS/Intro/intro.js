// creating a basic URL server using nodeJS .
// getting a http request and send the request value get the valuable.
// import the http its in-build
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  //get the requested url name from browser like http://localhost:3000/<request url>
  const parseUrl = url.parse(req.url, true);
  console.log(parseUrl);
  //  http://localhost:3000/
  if (parseUrl.pathname === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h1>Hello</h1>`);
    res.end();
  }
  //   http://localhost:3000/about
  else if (parseUrl.pathname === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h1>Hello about</h1>`);
    res.end();
  } else {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h1>Page Not found</h1>`);
    res.end();
  }
});
server.listen(3000, () => {
  console.log("your page successfully run in: http://localhost:3000");
});
