const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
require("./app/models/booklist.model.js");

require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .on("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.log(`Connection error: ${err.message}`);
  });

require("./app/routes/booklist.router.js")(app);

const server = app.listen(8080, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});
