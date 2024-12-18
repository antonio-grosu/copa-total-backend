const express = require("express");
const app = express();
require("dotenv").config();
const championshipRouter = require("./routers/Championship");
const tournamentRouter = require("./routers/Tournament");
app.use(express.json());
// import the connect function from db/index.js
const connect = require("./db");
const port = 3000;
// use the championshipRouter for all routes that start with /championships
app.use("/championships", championshipRouter);
// use the tournamentRouter for all routes that start with /tournaments
app.use("/tournaments", tournamentRouter);

// start function try connecting, else log the err
const start = async () => {
  try {
    connect(process.env.URI);
    app.listen(3000, () => {
      console.log("Server listening on port 3000");
    });
  } catch (err) {
    console.log(err);
  }
};

start();
