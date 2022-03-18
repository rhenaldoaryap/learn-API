const express = require("express");

const quotesController = require("../controller/todos.controller");

const router = express.Router();

router.get("/", quotesController.getRandomQoute);

module.exports = router;
