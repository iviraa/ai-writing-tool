const express = require("express");
const SpellingRouter = express.Router();

SpellingRouter.post("/spelling", async (res, req) => {
  res.json({ message: "Spelling Router" });
});

module.exports = SpellingRouter;
