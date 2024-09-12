//Dependencies
const express = require("express");
const cors = require("cors");
const path = require("path");

//Configurations
require("dotenv").config();

//Initializations
const app = express();
const PORT = process.env.PORT || 8000;

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Starting server on port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
