const http = require("http");
const { readFileSync } = require("fs");
const PORT = 5000;

const htmlFile = readFileSync("./Course-Website/index.html", "utf-8");
const cssFile = readFileSync("./Course-Website/css/style.css", "utf-8");
const jsFile = readFileSync("./Course-Website/js/index.js", "utf-8");
const headerShape = readFileSync("./Course-Website/images/header-shape.svg");
const appStore = readFileSync("./Course-Website/images/app-store.png");
const heroImage = readFileSync("./Course-Website/images/hero-image.svg");
const downloadApp = readFileSync("./Course-Website/images/download-app.png");
const googlePlay = readFileSync("./Course-Website/images/google-play.png");
const person1 = readFileSync("./Course-Website/images/person-1.jpg");
const person2 = readFileSync("./Course-Website/images/person-2.jpg");
const photography = readFileSync("./Course-Website/images/photography.jpg");
const public = readFileSync("./Course-Website/images/public.jpg");
const testimonialBg = readFileSync(
  "./Course-Website/images/testimonial-bg.jpg"
);
const typing = readFileSync("./Course-Website/images/typing.jpg");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(htmlFile);
    res.end();
  } else if (req.url === "/css/style.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(cssFile);
    res.end();
  } else if (req.url === "/js/index.js") {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.write(jsFile);
    res.end();
  }
  //add images in SVG
  else if (req.url === "/images/header-shape.svg") {
    res.writeHead(200, { "Content-Type": "image/svg+xml" });
    res.write(headerShape);
    res.end();
  } else if (req.url === "/images/hero-image.svg") {
    res.writeHead(200, { "Content-Type": "image/svg+xml" });
    res.write(heroImage);
    res.end();
  }
  //add images in PNG
  else if (req.url === "/images/app-store.png") {
    res.writeHead(200, { "Content-Type": "image/png" });
    res.write(appStore);
    res.end();
  } else if (req.url === "/images/download-app.png") {
    res.writeHead(200, { "Content-Type": "image/png" });
    res.write(downloadApp);
    res.end();
  } else if (req.url === "/images/google-play.png") {
    res.writeHead(200, { "Content-Type": "image/png" });
    res.write(googlePlay);
    res.end();
  }
  //add images in JPEG
  else if (req.url === "/images/person-1.jpg") {
    res.writeHead(200, { "Content-Type": "image/jpeg" });
    res.write(person1);
    res.end();
  } else if (req.url === "/images/person-2.jpg") {
    res.writeHead(200, { "Content-Type": "image/jpeg" });
    res.write(person2);
    res.end();
  } else if (req.url === "/images/photography.jpg") {
    res.writeHead(200, { "Content-Type": "image/jpeg" });
    res.write(photography);
    res.end();
  } else if (req.url === "/images/testimonial-bg.jpg") {
    res.writeHead(200, { "Content-Type": "image/jpeg" });
    res.write(testimonialBg);
    res.end();
  } else if (req.url === "/images/typing.jpg") {
    res.writeHead(200, { "Content-Type": "image/jpeg" });
    res.write(typing);
    res.end();
  } else if (req.url === "/images/public.jpg") {
    res.writeHead(200, { "Content-Type": "image/jpeg" });
    res.write(public);
    res.end();
  } else {
    res.writeHead(400, { "Content-Type": "text/html" });
    res.write(`
    <h1>Something went wrong</h1>
    <a href="/">Click here to go home page</a>
`);
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server is running in: http://localhost:${PORT}`);
});
