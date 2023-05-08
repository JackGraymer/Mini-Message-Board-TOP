const express = require("express");
const Messages = require("../models/message");
const router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  const messages = await Messages.find().sort({ date: -1 });
  res.render("index", { title: "Latest messages", messages: messages });
});

router.post("/new", function (req, res, next) {
  const newMessage = new Messages({
    user: req.body.name,
    message: req.body.message,
    added: new Date(),
  }).save();

  res.redirect("/");
});

module.exports = router;
