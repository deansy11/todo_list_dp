const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mustacheExpress = require("mustache-express");

app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache")

app.set("views", __dirname + "/views");

// app.use(express.static("routefile???"))

app.use(bodyParser.urlencoded({extended: false}));

// app.use(expressValidator());

app.get("/", (req, res) => {
  res.send("Hello");
  console.log("Helloooo");
});

app.listen(8080, () => {
  console.log("Node running successfully at http://localhost:8080");
})
