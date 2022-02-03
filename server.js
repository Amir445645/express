const express = require("express");
const open = require("./Middleware/open.js");
const app = express();
const port = 4000;
app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static(__dirname + "/static"));
app.use(open);

app.get("/", (req, res) => {
  res.render("index", {
    dayOn: req.isItOpen[0],
    hourOn: req.isItOpen[1],
    open: req.isItOpen[2],
  });
});
app.get("/OurServices", (req, res) => {
  res.render("OurServices", {
    dayOn: req.isItOpen[0],
    hourOn: req.isItOpen[1],
    open: req.isItOpen[2],
  });
});
app.get("/ContactUs", (req, res) => {
  res.render("ContactUs", {
    dayOn: req.isItOpen[0],
    hourOn: req.isItOpen[1],
    open: req.isItOpen[2],
  });
});
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`server listening on port  ${port}`);
});
