import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("<h1>Hey brooss..</h1>");
// });
// app.get("/about", (req, res) => {
//   res.send("<h1>Hey brooss..This is about section.</h1>");
// });
app.use(express.static("./Course-Website"));
app.all("*", (req, res) => {
  res.status(404).send(`
    <p>page not found</p>
    <a href='/'>back to home</a>
    `);
});
app.listen(5000, () => {
  console.log(`server is http://localhost:5000`);
});
