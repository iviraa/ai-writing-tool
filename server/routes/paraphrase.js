const express = require("express");
const ParaphraseRouter = express.Router();

ParaphraseRouter.post("/", async (req, res) => {
  res.json({ message: "Paraphrase Router" });
});

module.exports = ParaphraseRouter;
