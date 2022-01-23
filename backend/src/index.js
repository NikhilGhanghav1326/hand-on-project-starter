const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
   // eslint-disable-next-line prettier/prettier
   console.log("MOngo db server started"); 
  })
  .catch((err) => {
    console.log("Error connecting to database" + err);
  });

app.get("/hello-world ", (req, res) => {
  res.send("Hello world");
});

app.listen(process.env.PORT, () => {
  console.log("Backend server has started at " + process.env.PORT);
});
