const express = require("express"); //import express
const mongoose = require("mongoose"); // import mongoose to connect mongoDB with backend
const routes = require("./routes"); // import routes

const server = express(); //active server
mongoose.connect(
  ,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
); // conect mongoDB Atlas with my backend

server.use(express.json()); // inform json on DevController.store
server.use(routes); // routes is used on server

server.listen(3333); //listen port:3333 use server
