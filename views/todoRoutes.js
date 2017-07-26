const express = require("express");
const router = express.Router();

let toDoList = [
  {
    item: "Walk the dog.",
  }
];

router.get("/", (req, res) => {
  res.render("index", {toDoList: toDoList})
});

router.post("/toDoList", (req, res) => {
  console.log("New request", req.body);
  req.send(toDoList);
}
// red.redirect("/"));
