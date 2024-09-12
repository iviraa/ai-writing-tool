const express = require("express");
const GrammarRouter = express.Router();

GrammarRouter.post("/", async (req, res) => {
  res.json({ message: "Grammar Router" });
});

module.exports = GrammarRouter;
