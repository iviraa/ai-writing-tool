const express = require("express");
const ParaphraseRouter = express.Router();

ParaphraseRouter.post("/paraphrase", async (res, req) => {
  res.json({ message: "Paraphrase Router" });
});

module.exports = ParaphraseRouter;
