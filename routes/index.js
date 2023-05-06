const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Latest messages", messages: messages });
});

router.post("/new", function (req, res, next) {
  //messages.push(req.body.name);
  messages.unshift({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });
  console.log(messages);
  res.redirect("/");
});

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

module.exports = router;
