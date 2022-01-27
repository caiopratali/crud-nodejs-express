const listTicketsController = require("../useCases/listTickets/controller");
const createTicketController = require("../useCases/createTicket/controller");

module.exports = router => {
  router.get('/ticket', listTicketsController);
  router.post('/ticket', createTicketController);
}