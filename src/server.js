const express = require("express");

// const connection = require("./database/connection");
const router = require("./routes");

// connection.connect(error => {
//   if(error) {
//     console.log(error);
//   }
// });

const app = express();

app.use(express.json());

app.use(router);

app.listen(3333, () => console.log('Server ON'));