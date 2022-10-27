const express = require("express");
const rankRouter = express.Router();
const rankController = require("../controllers/rankController");

// a router for all method of rank endpoint that redirect to the rankcontroller
rankRouter.post("/", rankController.getRank);

module.exports = rankRouter;
