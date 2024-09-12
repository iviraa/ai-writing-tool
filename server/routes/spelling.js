const express = require("express");
const SpellingRouter = express.Router();

SpellingRouter.post("/", async (req, res) => {
  res.json({ message: "Spelling Router" });
});

module.exports = SpellingRouter;
