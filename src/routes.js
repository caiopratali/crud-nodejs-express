const express = require("express");
const ticketRoutes = require("./modules/tickets/routes");

const router = express.Router();

ticketRoutes(router);

module.exports =  router;