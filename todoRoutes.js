const express = require('express');
const router = express.Router();

let toDoList = []

router.get("/", (req, res) => {
  res.render("index", {toDoList: toDoList})
});

router.post("/toDoList", (req, res) => {
  console.log("New Request?", req.body);
  req.checkBody("toDoAdd", "Please add item list.").notEmpty()

  req.getValidationResult().then((result) => {
    if (!result.isEmpty()) {
      res.render("index", {error: "Tell us what you want to do!"});
      return;
    }

    toDoList.push({
      item: req.body.toDoAdd,
    });
    res.redirect("/")
  });
});

module.exports = router
