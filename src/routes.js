const express = require("express"); // import express to use Router
const DevController = require("./controllers/DevController"); // import controller when is my data

const routes = express.Router(); // use Router

routes.post("/devs", DevController.store); // POST using the path '/devs' send the body DevControler.store

module.exports = routes; // export routes
