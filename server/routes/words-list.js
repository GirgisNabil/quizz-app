const express = require("express");
const wordListRouter = express.Router();
const wordListController = require("../controllers/wordListController");

// a router for all method of wordlist endpoint that redirect to the wordListController
wordListRouter.get("/", wordListController.getWordsList);

module.exports = wordListRouter;
