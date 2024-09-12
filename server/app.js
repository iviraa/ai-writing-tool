//Configurations
require("dotenv").config();

//Dependencies
const express = require("express");
const cors = require("cors");
const path = require("path");
const GrammarRouter = require("./routes/grammar");
const ParaphraseRouter = require("./routes/paraphrase");
const SpellingRouter = require("./routes/spelling");

//Initializations
const app = express();
const PORT = process.env.PORT || 8000;

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routers
app.use("/api/grammar", GrammarRouter);
app.use("/api/paraphrase", ParaphraseRouter);
app.use("/api/spelling", SpellingRouter);

//Starting server on port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
