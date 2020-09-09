const express = require("express"); // import express to use Router
const DevController = require("./controllers/DevController"); // import controller when is my data
const LikeController = require("./controllers/LikeController");
const DislikeController = require("./controllers/DislikeController");

const routes = express.Router(); // use Router

routes.get("/devs", DevController.index);
routes.post("/devs", DevController.store); // POST using the path '/devs' send the body DevControler.store
routes.post("/devs/:devId/likes", LikeController.store);
routes.post("/devs/:devId/dislikes", DislikeController.store);

module.exports = routes; // export routes
