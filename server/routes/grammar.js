const express = require("express");
const GrammarRouter = express.Router();

GrammarRouter.post("/grammar", async (res, req) => {
  res.json({ message: "Grammar Router" });
});

module.exports = GrammarRouter;
